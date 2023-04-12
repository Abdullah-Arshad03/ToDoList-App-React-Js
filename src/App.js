import React from "react";
import { Todolist } from "./Todolist";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import './App.css'
const App = ()=>{
  return(
    <>
     <Nav/>
     <Todolist/>
     <Footer/>
    </>
  )
};
export {App};