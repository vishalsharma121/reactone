import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase eas clicked "  +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handlelowClick = ()=>{
        console.log("Uppercase eas clicked "  +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }
    const handleOnChange = (event)=>{
        console.log("on chnage");
        setText(event.target.value);
    }
    const handleclrClick = ()=>{
        setText("");
        props.showAlert("text clered", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copy", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra speces", "success");
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); //correct way to change the state
return (
<>
<div className="container mt-3" style={{color:props.mode==='dark'?'white':'black',}}>
    <h1>{ props.formHeading }</h1>
<div className="mb-3">
<input type="email" className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mail" placeholder="" />
</div>
<div className="mb-3">
<label htmlFor="text" className="form-label">Example textarea</label>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</div>
<div className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</div>
<div className="btn btn-primary mx-2" onClick={handleclrClick}>Clear All</div>
<div className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</div>
<div className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Sxtra Spece</div>
</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{0.08 * text.split(" ").length} Minutes To read</p>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h3>Inner Content</h3>
    <p>{text.split(" ").join(" ")}</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
</div>
</>
)
}
