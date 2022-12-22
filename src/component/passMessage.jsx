import React from "react";
class PassMessage extends React.Component {
  constructor() {
    super(); 

    this.state={
        inputText:"",
        submitInput:"Hello"
    }
  } 
inputMethod=(event)=>{
    this.setState({inputText:event.target.value})
}

submitMethod=()=>{
    this.setState({submitInput:this.state.inputText, inputText:""})
}
  render() {
    return <div>
<input onChange={this.inputMethod} 
value={this.state.inputText}
/>
<button onClick={this.submitMethod}>Submit</button>
<p>{this.state.submitInput} </p>

    </div>;
  }
}

export default PassMessage;
