import React from 'react';
import logo from '../assets/VichyLogo.png';
import '../style/home.css';
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring'

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
                 <img src={logo} alt="logo" className="logoHome"/>
             </div>
             <animated.div style={animationW} >
                 <h1>BIENVENIDOS A LA TRIVIA DE AMPOLLAS VICHY</h1>
                 <h2>¡Mucha suerte!</h2>
             </animated.div>
             <div >               
                 <Link to="/Quiz">
                     <button className="btn1">Comenzá acá</button>
                 </Link>               
              </div>
        </div>
    </div>
    </div>
)
}

export default Home;