import React, { useEffect, useState } from "react";
import  {useParams} from "react-router-dom";
import ReactQuill from 'react-quill';
import Quill from "quill";
import 'react-quill/dist/quill.snow.css';


const TOOLBAR_OPTIONS =[
  [{headr:[1,2,3,4,5,6,false]}],
  [{font:[]}],
  [{list :"ordered"},{list:"bullet"}],
  ["bold","italic","underline"],
  [{color :[]},{background:[]}],
  [{script:"sub"},{script:"super"}],
  [{align :[]}],
  ["image","blockquote","code-block"],
  ["clean"],
]

export default function TextEditor() {
  
   const{id:documentID} = useParams();
   const[socket,setSocket]  = useState();
   const[quill,setquill] = useState();

   useEffect(()=>{
      
     
     
   });
  const modules = {
    toolbar :TOOLBAR_OPTIONS,
  };
    
  return (
 
    <ReactQuill theme="snow" modules={modules} />
    
  );
}
