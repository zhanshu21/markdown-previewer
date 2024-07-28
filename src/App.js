import './App.css';
import { useState,useEffect } from 'react';

function App() {
  // fetch text data from txt
  const initText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia beatae maxime fugit? Quos, minima. Eaque reprehenderit sed, ullam temporibus odit quod nemo, illo quae pariatur quam placeat debitis ad. Sint."
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const fetchText = () => {
    let url = 'http://localhost:3000/init-text.txt';
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

  return (
    <div className="App">
      <textarea name="editor-text" id="editor" rows="10" cols="50" onChange={handleChange} value={text}></textarea>
      <div id="preview">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
