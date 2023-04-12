import React from "react";


const Tasks = (props)=>
{  

  
    return(
        <>
        <div className="Listoftasks">
        <button className="cross" onClick={()=>{
          props.onSelect(props.id)
        }} >x</button>  <li>{props.task}  </li>
      </div>
        </>
    );
};

export {Tasks};