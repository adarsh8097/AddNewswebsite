import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import the Quill stylesheet
import { useState } from 'react';

const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };
  
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'link', 'image', 'video'
  ];
  
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

  const EditableTextBox = () => {
    const [editorContent, setEditorContent] = useState('');
  
    const handleChange = (value) => {
      setEditorContent(value);
    };
  
    return (
      <div className="" >
        <ReactQuill 
          value={editorContent} 
          onChange={handleChange} 
          modules={modules} 
          formats={formats} 
          placeholder="Type Here..."
          className="h-48  overflow-hidden scrollbar-none"
        />
        
      </div>
    );
  };
  
export default EditableTextBox;
