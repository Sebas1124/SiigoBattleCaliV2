import React, { useEffect, useState } from 'react'

export const Lobbys = ({ data, newPlayers }) => {

const [ lobbys, setLobbys ] = useState(data);


useEffect(() => {
  setLobbys( data );
}, [ data ])

  return (
    <>
        <table className='table table-stripped'>

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
                                            className="btn btn-outline-primary"
                                            onClick={ () => newPlayers(lobby.id) }
                                            >Entrar
                                            </button>
                                        </td>
                            }
            
                        </tr>
                       ))
                }
            </tbody>
        </table>
    </>
  )
}
