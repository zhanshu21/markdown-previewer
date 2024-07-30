import React from "react";
import { marked } from "marked";

export function Preview(props) {
    return (
        <div id="preview-container" className="preview-container">
        <h3 className="title">Preview:</h3>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(props.text) }}
        ></div>
      </div>
    )
}