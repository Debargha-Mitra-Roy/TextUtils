import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleSpeakText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking...", "success")
    }

    const handleDownloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
        props.showAlert("Downloading...", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === `dark` ? `#212635` : `white`, color: props.mode === `dark` ? `white` : `black` }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleSpeakText}>Speak Text</button>
                <button className="btn btn-primary mx-1" onClick={handleDownloadText}>Download Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
