import React, { Component } from 'react';
import EditorMenu from './EditorMenu';

let preloadedContent = `
# Live demo
Changes are automatically rendered as you type.

---

### There are many ways to write with markdown...

* Paragraphs are separated by a blank line.
* Leave 2 spaces at the end of a line to do a line break.
* Go on [FreeCodeCamp](https://www.freecodecamp.org/), it's amazing !


### We can also write some code !

\`\`\`
Here is a test...
Do you know that FlexBox are amazing ?
\`\`\`

I guess it can be useful !


### What about Text attributes ?

We can use *italic*, **bold**, and also ~~strikethrough~~ if we want !

Actually, there are some others codes we can use to do the same...


### Want to try more ?

You can read this : [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

**Have fun ! :D**

`;

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      textAreaText: ''
    }
  }
  componentWillMount(){
    this.setState({textAreaText: preloadedContent},()=>{
      this.sendTextToParent(this.state.textAreaText)
    });
  }
  handleChange = (e) =>{
    this.setState({textAreaText: e.target.value},()=>{
      this.sendTextToParent(this.state.textAreaText)
    });

  }
  sendTextToParent = (text) =>{
    this.props.sendText(text);
  }
  render() {
    return (
      <div  className="editor">
        <textarea id="editor" className="editorTextArea" onChange={this.handleChange} value={this.state.textAreaText}/>
      </div>
    );
  }
}

export default Editor;