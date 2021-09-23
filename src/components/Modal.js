import React from "react";
import '../style/modal.css'

export default function Prueba2({setOpenModal}){


    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              
            </div>
            <div className="body">
              
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
                id="cancelBtn"
              >
                Aceptar
              </button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      );
}