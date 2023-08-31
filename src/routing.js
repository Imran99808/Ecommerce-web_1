import React,{useState,useContext} from "react";

export const theme=React.createContext();



// route for
export function Route({path,children}) {
    const [toggle,setToggle]=useContext(theme);
    return window.location.pathname===path?children:null;
  }
  
// link for
export function Link({className,to,children}) {
    const [toggle,setToggle]=useContext(theme)
   function handaleClick(e){
    // e.preventDefault();
   setToggle(!toggle)
  window.history.pushState({}," ",to)
       
   }
  return <a className={className} onClick={handaleClick}>{children}</a>
}




export function Rerender(props){
   
    const[toggle,setToggle]=useState(true)
  
    console.log(toggle);
   return(
   <theme.Provider value={[toggle,setToggle]}>
       {props.children} 

   
    </theme.Provider>
   )
}