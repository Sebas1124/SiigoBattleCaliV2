import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Play } from './components/Play/Play';
import { RoomMatch } from './components/RoomMatch/RoomMatch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RoomMatch/>
    </>
);



