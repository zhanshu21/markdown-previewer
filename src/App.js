import "./App.css";
import { useState, useEffect } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const fetchText = () => {
    let url = "http://localhost:3000/init-text.txt";
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setText(data);
      });
  };

  useEffect(() => {
    fetchText();
  }, []);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div id="editor-container" className="editor-container">
        <h3 className="title">Editor:</h3>
        <textarea
          name="editor-text"
          id="editor"
          className="editor"
          // rows="30"
          // cols="100"
          onChange={handleChange}
          value={text}
        ></textarea>
      </div>
      <div id="preview-container" className="preview-container">
        <h3 className="title">Preview:</h3>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
