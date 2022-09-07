import React, { useState } from 'react'

const create_room = () =>{
  var letters = "0123456789ABCDEF";

  var room = '#';

  for (var i = 0; i < 6; i++)
  room += letters[(Math.floor(Math.random() * 16))];

  return room;
}

export const NewLobby = ({ newLobby }) => {

  const [ lobby, setLobby ] = useState( create_room() )


  const onSubmit = (event) => {
    event.preventDefault();

    if ( lobby.trim().length > 0 )
    {
      newLobby( lobby );
      setLobby( create_room() );
    }
    
  }


  return (
    <>
        <h3>Crear Sala</h3>

        <form onSubmit={ onSubmit }>
        <input 
        type="hidden" 
        className='form-control m-2' 
        value={ lobby }
        onChange={ (ev) => setLobby( ev.target.value ) }
        />
            <button 
              className="btn btn-success"
              >Crear
              </button>
        </form>
    </>
  )
}
