import React from 'react';
import home from '../img/home.png';
import "../css/home.css";
 
function Home() {
 
  return (
    <>
    <img className="image" src={home}/>
    <h1 className="heading">Welcome to Commitments</h1>
    </>
  );
}
 
export default Home;