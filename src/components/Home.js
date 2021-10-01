import React from 'react';
import '../style/home.css';
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import Logo from './Logo'

function Home (){

 const animationW = useSpring({
     from: {opacity: 0, transition: "2s"},
     to:{opacity: 1, transition: "2s" },   
 })
return(
    <div className="home containerApp"> 
    <div className=" container">
        <div className="containerHome">
             <div>
                <Logo></Logo> 
             </div>
             <animated.div style={animationW} className="containerBorder">
             <div >
                 <h1>Bienvenidos a la trivia</h1>
                  <h1><span>The Simpsons</span></h1>  
                 <h2>¿Están listos?</h2>
             </div>
             <div >               
                 <Link to="/Quiz">
                     <button className="btn1">Comenzá acá</button>
                 </Link>               
              </div>
              </animated.div>
        </div>
    </div>
    </div>
)
}

export default Home;