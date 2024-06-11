import React, { useState, useRef } from 'react';
import '../assets/css/Editor.css';
 
function Editor() {
  const [content, setContent] = useState('');
  const textAreaRef = useRef(null);

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    setContent(textAreaRef.current.innerHTML);
  };

  const handleInput = () => {
    setContent(textAreaRef.current.innerHTML);
  };

  const handleClear = () => {
    textAreaRef.current.innerHTML = '';
    setContent('');
  };

  return (
    <div className="App">
      <div className="toolbar">
        <div className="menu">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Insert</button>
          <button>Format</button>
          <button>Tools</button>
          <button>Table</button>
          <button>Help</button>
        </div>
        <div className="controls">
          <button onClick={() => document.execCommand('undo')}>↺</button>
          <button onClick={() => document.execCommand('redo')}>↻</button>
          <button onClick={() => formatText('insertImage', prompt('Enter image URL', ''))}>
            <img src="https://via.placeholder.com/15" alt="Insert Image" />
          </button>
          <select onChange={(e) => formatText('formatBlock', e.target.value)} defaultValue="">
            <option value="" disabled hidden>Paragraph</option>
            <option value="H1">Heading 1</option>
            <option value="H2">Heading 2</option>
            <option value="H3">Heading 3</option>
            <option value="P">Paragraph</option>
          </select>
          <button onClick={() => formatText('bold')}><b>B</b></button>
          <button onClick={() => formatText('italic')}><i>I</i></button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div
        ref={textAreaRef}
        className="text-area"
        contentEditable
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default Editor;
