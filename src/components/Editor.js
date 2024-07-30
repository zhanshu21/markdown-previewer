import React from 'react';

export function Editor(props) {
    return (
        <div id="editor-container" className="editor-container">
        <h3 className="title">Editor:</h3>
        <textarea
          name="editor-text"
          id="editor"
          className="editor"
          // rows="30"
          // cols="100"
          onChange={props.handleChange}
          value={props.text}
        ></textarea>
      </div>
    )
}