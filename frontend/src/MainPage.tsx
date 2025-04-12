import React, { useState } from "react";
import AddButton  from "./AddButton";
import PopUp from "./PopUp"
import Header from './Header';


const MainPage : React.FC = () =>{
    const [addButton, setAddButton] = useState(false);

    const toggleAddButton = () => {
        setAddButton(!addButton);
      };

    return(
        <header className="main">
          <div className ="HeaderBar">
            <Header/>
            <button className="startButtton">勉強開始</button>
          <AddButton 
         open={addButton}
         controls="popup"
         label="メニューを開きます"
         onClick={toggleAddButton}/>
         
    
    
         <PopUp id ="popup" open ={addButton}/>
         </div>  
        </header>
    
     );
   };
   export default MainPage;