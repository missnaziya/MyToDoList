import React, { useState } from "react";
import './ToDoList.css'

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const Data = (e) => {
    setInput(e.target.value);
  };
  // console.log(input);

  const Showdata = () => {
    // setList([...list,input]);
    // console.log(list)

    setList((list) => {
      const updatedList = [...list, input];
      console.log(updatedList);
      setInput("");
      return updatedList;
    });
  };


  const Remove =(i)=> {

      const updatedData =list.filter((elem,id) => {
          return i!=id;
          
        })
        setList(updatedData)
    }

const RemoveAll = () =>{
    setList('');
}
const Edit = (i) => {
    setInput(list)         
} 


  return (
    <div id="main"  >
      <h1>ToDo List😊</h1>
      <span>
        <input type="text" value={input} onChange={Data} />{" "}
        <button onClick={Showdata}>➕</button>
      </span>
      <h3>Your List</h3>

      {list != [] &&
        list.map((data, i) => {
          return <>
           <p key={i}>
           <div>{data}
           <button onClick={()=>Remove(i)} >Remove❌</button>
           <button onClick={Edit}>Edit</button>
           </div>
           </p>
          
          </>;
        })}

        {list.length>1 && 
         <button onClick={RemoveAll} >Remove All</button>
        }
    
    </div>
  );
};

export default ToDoList;
