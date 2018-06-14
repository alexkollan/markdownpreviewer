import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import {markdown} from 'markdown';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      fromEditor: '',
      converted: ''
    }
  }

  takeTextFromEditor= (text) => {
    this.setState({fromEditor: text},()=>{
      this.convertText();
    })
  }
  convertText = () => {
    let mdown = this.state.fromEditor;
    let convertedText = markdown.toHTML(mdown);
    this.setState({converted: convertedText})
  }

  render() {
    return (
      <div className="App">
      <h2>Mobile first Markdown Previewer</h2>
        <Editor sendText={this.takeTextFromEditor}/>
        <Previewer textFromEditor={this.state.converted}/>
      </div>
    );
  }
}

export default App;
