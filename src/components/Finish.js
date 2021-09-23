import React from 'react';
import logo from '../assets/VichyLogo.png'
import '../style/home.css'
import {Link} from "react-router-dom"
import '../style/finish.css'

function Finish (){
return(
    <div className="home containerApp"> 
    <div className=" container">
        <div className="containerHome ">
             <div>
                 <img src={logo} alt="logo" className="logoHome"/>
             </div>
             <div className="containerFinish">
             <div>
                 <h1>¡GRACIAS POR COMPARTIR TUS DATOS!</h1>
                 <p>Recordá que si subís tu producto Anti Edad de <b>Vichy</b> favorito con <span>#AntiedadEdadVichy</span> tendrás chances de recibir una ampolla <b>Glyco-C</b></p>
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