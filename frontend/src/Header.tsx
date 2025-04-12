import {FC, useState} from "react";
import { ToggleButton } from "./Togglebutton";
import { Navigation } from "./Navigation";
import "./style.css";

const Header : FC = ()=>{
 const [open, setOpen]=useState(false);
 const toggleFunction =()=>{
    setOpen((prevState) => !prevState);
 };

 return(
    <header className="header">
      <div className ="HeaderBar">
      <ToggleButton 
     open={open}
     controls="navigation"
     label="メニューを開きます"
     onClick={toggleFunction}/>
     <a className="AppName">学習管理SNS</a>
     


     <Navigation id ="navigation" open ={open}/>
     </div>  
    </header>

 );
};
export default Header;