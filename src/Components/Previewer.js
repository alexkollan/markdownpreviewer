import React, { Component } from 'react';

class Previewer extends Component {
  render() {
    return (
      <div className="previewer">
        <div id="preview" dangerouslySetInnerHTML={{__html: this.props.textFromEditor}}/>
      </div>
    );
  }
}

export default Previewer;