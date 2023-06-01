import React, { useState } from 'react'

export default function Textfrom(props) {
  const handleupparclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to upparcase!", "successfully");
  }

  const handleloewrclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase!", "successfully");
  }


  const handleclearclick = () => {
    console.log("upparcase was clicked");
    let newtext = " ";
    setText(newtext)
    props.showAlert("clear all!", "successfully");
  }



  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Converted to copy!", "successfully");
  }



  const handleExtraspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("remove extra space!", "successfully");
  }




  const handleonchanged = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('')


  return (<>
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
      <h1 className='mb-2'> {props.heading}</h1>
      <div className="mb-3">
        <label for=" myBox" class="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleonchanged} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          id="myBox" rows="10"></textarea>
      </div>

      <button type="button" className="btn btn-primary mx-2 " onClick={handleupparclick}> Convert to Uppercase </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleloewrclick}>Convert to Lowercase </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleclearclick}>Clear All </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleExtraspace}> Remove Extra space</button>
    </div>

    <div className="container" my-3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : " Nothing to preview"}</p>

    </div>
  </>
  )
}
