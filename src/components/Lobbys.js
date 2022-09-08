import React, { useEffect, useState } from 'react'
import { Modal } from './Modal/Modal';
import { RoomPlayers } from './RoomPlayers/RoomPlayers';

export const Lobbys = ({ data, newPlayers, players }) => {

const [ lobbys, setLobbys ] = useState(data);

const [Room, setRoom] = useState(false)

useEffect(() => {
  setLobbys( data );
}, [ data ])

const onRoomMatch = ( id ) => {
    newPlayers(id)
    setRoom(true);
}

const onCloseModal = () =>{
    setRoom(false);
}

  return (
    <>
        {
            (Room)
                ? 'Sala de espera'
                :<div className="table-wrapper">
                <table className='fl-table'>
                    <thead>
                        <tr>
                            <th>Sala</th>
                            <th>Jugadores</th>
                            <th>Entrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            lobbys.map( lobby => (
                                <tr key={ lobby.id }>
                                    <td>{ lobby.id}</td>
                                    <td>{ lobby.players } </td>
                                    {
                                        (lobby.players >= 7) 
                                            ?
                                                <td>
                                                    <h6>SALA LLENA</h6>
                                                </td>
                                            :   <td>
                                                    <button 
                                                    className="button__table"
                                                    onClick={ () => onRoomMatch(lobby.id) }
                                                    >Entrar
                                                    </button>
                                                </td>
                                    }
        
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
        }
    </>
  )
}
