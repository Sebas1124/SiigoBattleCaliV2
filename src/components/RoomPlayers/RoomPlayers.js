import React from 'react'
import { App } from '../../App';

import './modal.css';

export const RoomPlayers = ({ closeModal }) => {
  return (
    <div className="modal__container">
          <div id="demo-modal" className="modal" role="dialog">
          <div className="model-inner">
              <div className="modal-header">
              <h3>Sala de espera</h3>
              <button onClick={ closeModal } className="button__table" data-id="demo-modal" aria-label="Close">
                  &times;
              </button>
              </div>
                  <App/>
              </div>
          </div>
    </div>
  )
}
