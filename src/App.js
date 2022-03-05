import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import data from './data';
import './App.css';

function App() {

  const [ text, setText ] = useState(data)

  return (
    <div className="App">
      <div className="container">
          <div className="title">Editor</div>
          <textarea 
            id="editor"
            name="editorTextArea"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
      </div>
      <div className="container">
        <div className="title">Previewer</div>
          <div id="preview">
            <ReactMarkdown 
              children={text}
              remarkPlugins={[remarkGfm]}
              />
          </div>
      </div>
    </div>
  );
}

export default App;
