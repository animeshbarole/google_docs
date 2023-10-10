import React, { useEffect, useState,useRef,useCallback } from "react";
import  {useParams} from "react-router-dom";

import { io } from "socket.io-client";
import Quill from "quill";
import "quill/dist/quill.snow.css"

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

   useEffect(()=>{
      
     
     
   },[socket,quill])

   useEffect(()=>{
          
       if(socket== null||quill==null) return ;
       
       socket.once('load-document',(document) =>{
         quill.setContents(document);
         quill.enable();

       })
       socket.emit("get-document",documentID);
       
     
   },[socket,documentID,quill]);




  const wrapperRef = useCallback((wrapper)=>{
      
    if(wrapper== null) return ;

    wrapper.innerHTML = "";
    const editor =document.createElement('div');
    wrapper.append(editor);

    const q = new Quill(editor,{
         
      theme : 'snow',
      modules:{toolbar :TOOLBAR_OPTIONS}
    })
    
    q.disable()
    q.setText("Loading....");
    setQuill(q);
     
  },[]);
    
  return (
      
    <div className="container" ref = {wrapperRef}>

    </div>

    
    
  );
}
