import { useEffect, useState } from "react";
import { Lobbys } from "./components/Lobbys";
import { NewLobby } from "./components/NewLobby";
import io from 'socket.io-client'


const connectSocketServer = () =>{
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  });
  return socket;
}


function App() {

  const [ socket ] = useState( connectSocketServer() )
  const [ online, setOnline ] = useState(false);
  const [ lobbys, setLobbys ] = useState([])

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


  const Join_room = ( id ) => {
    console.log(id)
      socket.emit( 'NewPlayer', id )
  }

  const newRoom = ( id ) =>{
    socket.emit( 'newLobby', id )
  }
  

  return (
    <div className="container">
    
      <div className="alert">
        <p>
          Estado del servidor: 
          {
            (online) 
              ? <span className="text-success m-1">Conectado</span>
              : <span className="text-danger m-1">Desconectado</span>

          }
        </p>
      </div>


      <h2> Lobbys disponibles </h2>
      <hr />

      <div className="row">
        <div className="col-8">
            <Lobbys data={ lobbys } newPlayers={ Join_room }/>
        </div>
        
        <div className="col-4">
            <NewLobby newLobby={ newRoom }/>
        </div>
      </div> 

  


    </div>
  );
}

export default App;
