import React, { useState } from 'react'
import { App } from '../../App';

import './modal.css';

export const Modal = () => {


  return (
    <>
        <div className="modal">
            <div className="model-inner">
                <h3>Lista de partidas activas</h3>
                <button className="modal-close"> &times; </button>
            </div>

            <App />
        
        </div>
    </>
  )
}
