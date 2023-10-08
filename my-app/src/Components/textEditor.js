import React, { useEffect, useState } from "react";
import  {useParams} from "react-router-dom";
import ReactQuill from 'react-quill';
import { io } from "socket.io-client";
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
   const[quill,setQuill] = useState();

   useEffect(()=>{
      
      //Connecting to the backend ;
       
      const s = io("http://localhost:3001");

      setSocket(s);

      return()=>{
        s.disconnect();
      }
     
   },[]);
  const modules = {
    toolbar :TOOLBAR_OPTIONS,
  };
    
  return (
 
    <ReactQuill theme="snow" modules={modules} />
    
  );
}
