import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import App from './App';
import  Room  from './components/Room';
=======
import {App} from './App';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Play } from './components/Play/Play';

>>>>>>> b294bdb91fbaee0063dc956ee2fa79afbf4f30f9

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<<<<<<< HEAD
    <App />
    <Room/>
=======
        <Navbar />
        <About/>
        <Play/>
        <Footer/>
>>>>>>> b294bdb91fbaee0063dc956ee2fa79afbf4f30f9
    </>
);



