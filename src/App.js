import "./App.css";
import { useState, useEffect } from "react";
import { marked } from "marked";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

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
      <Editor text={text} handleChange={handleChange} />
      <Preview text={text} />
    </div>
  );
}

export default App;
