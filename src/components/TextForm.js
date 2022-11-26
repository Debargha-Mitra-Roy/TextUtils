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
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "danger");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "warning")
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
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === `dark` ? `#212635` : `white`, color: props.mode === `dark` ? `white` : `black` }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleDownloadText}>Download Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
