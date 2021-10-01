import React from 'react';
import Logo from  './Logo'
import '../style/home.css'
import {Link} from "react-router-dom"
import '../style/finish.css'

function Finish (){
return(
    <div className="home containerApp"> 
    <div className=" container">
        <div className="containerHome ">
             <Logo/>
             <div className="containerBorder">
             <div>
                 <h1>¡GRACIAS POR COMPARTIR TUS DATOS!</h1>
                 <p>En breve te enviaremos un email con tu <b>Premio</b> por haber participado </p>
             </div>
             <div className="" >               
                 <Link to="/Quiz">
                     <button className="btn1">Continuar</button>
                 </Link>               
              </div>
              </div>
        </div>
    </div>
    </div>
)
}

export default Finish;