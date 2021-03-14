import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import Note from "./Note";
const TodoApp = () => {
    const [addItem,SetAdditem]=useState([]);
   const  Addnote=(note)=>{
        SetAdditem((olditem)=>{
            return [...olditem,note];
        })

   };
   const onDelete=(id)=>{
    SetAdditem((olditem)=>
        olditem.filter((curdata,index)=>{
            return index!==id;
        })
        
        
    )
   };
    return (
        <>
            <Header/>
            <AddNote passNote={Addnote}/>
            {addItem.map((val,index)=>{
                return  <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
                />
            })}

            {/* <Footer/> */}

        </>

    );
};
export default TodoApp;
