import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase was clicked :- " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        // console.log("LowerCase was clicked :- " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearText = () => {
        // console.log("ClearText was clicked :- " + text);
        let newText = '';
        setText(newText)
    }

    const handleSpeakText = () => {
        // console.log("SpeakText was clicked :- " + text);
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleDownloadText = () => {
        // console.log("DownloadText was clicked :- " + text);
        const element = document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    // text = "New Text" // Wrong way to change the state
    // setText("New Text") // Right way to change the state

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpeakText}>Speak Text</button>
                <button className="btn btn-primary mx-1" onClick={handleDownloadText}>Download Text</button>
            </div>
            <div className="container my-3"></div>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
