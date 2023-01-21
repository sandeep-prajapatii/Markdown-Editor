import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'


function App() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown");
  return (
    <div className="App">

      <div className="markdown">
        <b>Markdown</b>
        <hr/>
        <textarea className='markdown-txt' value={markDown} onChange={(e) => setMarkDown(e.target.value)} />
      </div>

      <div className="preview">
        <b>Preview</b><hr/>
        <div className='preview-txt'>
          <ReactMarkdown className='source'>{markDown}</ReactMarkdown>

  
        </div>
      </div>
    </div>
  );
}

export default App;
