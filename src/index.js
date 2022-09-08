import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Play } from './components/Play/Play';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar/>
        <About/>
        <App/>
        <Play/>
        <Footer/>
    </>
);



