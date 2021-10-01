import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import '../style/form.css';
import Modal from "./Modal"
import star from "../assets/Star.png"
import Finish from './Finish';


function Form (prop){
const [check, setCheck] = useState(false)
const [datos, setDatos] = useState({
    nombreYapellido:"",
    dir:"",
    localidad:"",
    cp:"", 
    check: check
});
const [modalOpen, setModalOpen] = useState(false);
const [showFinish, setShowFinish] = useState(false)
const hadleCheck=()=>{
  setCheck(true)

}

const handleInputChange = (event)=>{

setDatos({
    ...datos,
    [event.target.name] : event.target.value
})
}
const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
//const sendDatos=(event)=>{
//    event.preventDefault();
 // console.log(datos)
//}
 const onSubmit = (data) =>{
   console.log(data)
   setShowFinish(true)
 }


return(
  <> { showFinish === false ?
    <div className="containerHome container containerForm modalForm containerBorder2 ">
        <div id="home" className="flex-colum flex-center " >
             
             <h2>Hiciste</h2>
             <div className="ptsQuiz">
             <img src= {star} alt="star" />
             <h1> {prop.prop} </h1>
             <h2>pts.</h2>
             </div>
             <p>Completá acá tus datos para que puedas recibir tu premio</p>
             <div className="containerForm formDatos">
                 <form  onSubmit={handleSubmit(onSubmit)} >
                 <input 
                     placeholder="Nombre y apellido" 
                     type="text" 
                     name="nombreYapellido"
                     {...register("nombreYapellido", 
                     { required:{value:true, message: "Debes ingresar tu nombre y tu apellido"}, 
                     maxLength: {value:50, message: "el nombre y apellido no debe contener más de 50 caracteres"}, 
                     minLength: {value:8, message: "el nombre y apellido debe contener más de 8 caracteres"} })}
                     onChange={handleInputChange}
                  />
                
                 <input 
                     placeholder="Email xxx@xxx"  
                     type="text" 
                     name="dir"
                     {...register("dir", 
                     { required:{value:true, pattern:/\S+@\S+\.\S+/, message: "Debes ingresar tu email"}, 
                     maxLength: {value:50, message: "La dirección no debe contener más de 50 caracteres"}, 
                     minLength: {value:8, message: "La dirección debe contener más de 8 caracteres"} })}
                     onChange={handleInputChange}
                     />
                     
                 <div className="datosForm2">
                   <input 
                      placeholder="Localidad"  
                      type="text" 
                      name="localidad"
                      {...register("localidad", 
                      { required:{value:true, message: "Debes ingresar tu localidad"}, 
                      maxLength: {value:50, message: "La localidad no debe contener más de 50 caracteres"}, 
                      minLength: {value:8, message: "La localidad debe contener menos de 8 caracteres"} })}
                      onChange={handleInputChange}
                      />
                      

                   <input 
                     placeholder="Teléfono" 
                     type="number" 
                     name="cp"
                     {...register("cp", 
                     { required:{value:true, message: "Debes ingresar tu teléfono"}, 
                     maxLength: {value:20, message: "El teléfono postal no debe contener más de 20 caracteres"}, 
                     minLength: {value:8, message: "El teléfono debe contener menos de 10 caracteres"} })}
                     onChange={handleInputChange}
                     />
                     
                 </div>
                 <div className="handleErrors">
                 {errors.nombreYapellido && (<p style={{ color: "red" }}>{errors.nombreYapellido.message}</p>)}
                 {errors.dir && (<p style={{ color: "red" }}>{errors.dir.message}</p>)}
                 {errors.cp && (<p style={{ color: "red" }}>{errors.cp.message}</p>)}
                 {errors.localidad && (<p style={{ color: "red" }}>{errors.localidad.message}</p>)}
                 </div>

                 <div className="containerBtn">
                   <button onClick={handleSubmit(onSubmit)}className="btn-next" type="submit">Continuar</button>
                 </div>

                   <div className="containerByc">
                   <button className="bycButton" onClick={() => {setModalOpen(true);}}> 
                   Acepto Bases y Condiciones
                   </button>

                   {modalOpen && <Modal setOpenModal={setModalOpen} />}
                 
                    <label htmlFor="check" className="labelByC">
                     <div className="checkbox-container">
                     <input type="checkbox" onClick={hadleCheck}  name="check" className="checkbox" id="byc"  
                       {...register("check", 
                         { required:{value:true, message: "Debes aceptar las bases y condiciones"} })}
                          
                     >

                     </input>
                     <div className="bycImg"></div>
                     </div>
                     
                  </label>
                  </div>
                 </form>
            </div>
         </div>
    </div> 
    :
    <Finish></Finish>
   } </>
)
}

export default Form;