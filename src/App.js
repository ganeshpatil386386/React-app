import React from 'react';
import './App.css';
import './header';



const Person = (props) => {

    return(
      <>
      <h1>Hello Owrld {props.name} </h1>
      <h2>Hello World second</h2>
      </>
      
    )
}

function App() {
  const name = "Ganesh";
  return (

   
  <>
    
    <div className="ne">
        <Person  name="John"/>
        <Person  name="ganesh"/>
    </div>
  <h2> Welcome To React! </h2>
  <div className="parent">
      
        <div className="new">
      <h1>Hello,  {name} </h1>

       </div>

       <div className="second">
          <h1>  React</h1>
       </div>
       </div>
     
    
   </>     
        );
    
      
}

export default App;
