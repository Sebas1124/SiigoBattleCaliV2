import { useEffect, useState } from "react";
import { Lobbys } from "./components/Lobbys";
import { NewLobby } from "./components/NewLobby";
import io from 'socket.io-client'

import './App.css'

const connectSocketServer = () =>{
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  });
  return socket;
}


export function App() {

  const [ socket ] = useState( connectSocketServer() )
  const [ online, setOnline ]   = useState(false);
  const [ lobbys, setLobbys ]   = useState([])
  const [ players, setPlayers ] = useState([])

  console.log( players )

  useEffect(() => {
    setOnline( socket.connected )
  }, [ socket ]);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline( true )
    });

  }, [ socket ])
  
  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline( false )
    });

  }, [ socket ])

  useEffect(() => {
    socket.on('current-lobbys', (lobbys) => {
      setLobbys(lobbys)
    });
  
  }, [ socket ])

  useEffect(() => {
    socket.on('current-players', (players) => {
      setPlayers(players)
    });
  
  }, [ socket ])


  const Join_room = ( id ) => {
      socket.emit( 'NewPlayer', id )
  }

  const newRoom = ( id ) =>{
    socket.emit( 'newLobby', id )
  }

  return (
      <div>

        <div className="card__container">
        
          <div className="alert">
            <p>
              Estado del servidor: 
              {
                (online) 
                  ? <span className="text-success">Conectado</span>
                  : <span className="text-danger">Desconectado</span>

              }
            </p>
          </div>


          <h2> Lobbys disponibles </h2>
          <hr />

          <div className="table__container">
            <div className="table__left">
                <Lobbys data={ lobbys } newPlayers={ Join_room } players={ players }/>
            </div>
            
            <div className="table__right">
                <NewLobby newLobby={ newRoom }/>
            </div>
          </div>


        </div>
      </div>
  );
}