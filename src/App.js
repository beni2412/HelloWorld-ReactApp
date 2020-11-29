import logo from './logo.svg';
import './App.css';
import React from "react"

class App extends React.Component{
  url='https://www.netflix.com/watch/80223052?trackId=14170032&tctx=1%2C0%2C915e0070-9ace-4bfb-84f8-aab412231b1e-146808144%2C4e852765-57ca-4899-9993-730c011fbd82_69955044X6XX1606416631416%2C%2C'
  constructor(){
    super()
    this.state = {
      title: "Hello React - 006",
      userName:''
    }
  }

  onClick = ($event)=>{
    console.log("save button is clicked: ", $event);
    window.open(this.url,"_blank")
  }

  onNameChange=(event)=>{
    console.log("Value is",event.target.value)
    this.setState({userName: event.target.value})
      }

  render(){
    return<div><div>
      <h1>Hello {this.state.userName}</h1>
   <img src={logo} onClick={this.onClick}
   alt="Logo" width="100px"/>
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange}/>
      </div>
    </div>
  }
}

export default App;
