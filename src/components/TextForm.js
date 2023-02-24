import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase eas clicked "  +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = ()=>{
        console.log("Uppercase eas clicked "  +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On chnage");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); //correct way to change the state
return (
<>
<div className="container mt-3">
    <h1>{ props.formHeading }</h1>
<div className="mb-3">
<input type="email" className="form-control" id="mail" placeholder="name@example.com" />
</div>
<div className="mb-3">
<label htmlFor="text" className="form-label">Example textarea</label>
<textarea className="form-control" placeholder={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</div>
<div className="btn btn-primary max-2" onClick={handlelowClick}>Convert to Lowercase</div>
</div>
<div className="container my-2">
    <h2>Your text summary</h2>
    <p>{0.08 * text.split(" ").length} Minutes To read</p>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h3>Inner Content</h3>
    <p>{text.split(" ").join(" ")}</p>
    <h4>Preview</h4>
    <p>{text}</p>
</div>
</>
)
}
