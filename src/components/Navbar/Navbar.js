import React from 'react'

import './nav_help';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from '../About/About';

import  Logo  from '../../assets/images/siigologo.png';


export const Navbar = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={ About }/>
            </Routes>
            <header className="header" id="header">
            <nav className="nav container">
                <a href="" className="nav__logo">
                    <img src={ Logo } alt="" className="nav__logo-img"/>
                    Siigo Battle Cali
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="{{ route('main')}}#home" className="nav__link active-link">Inicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="{{  route('main') }}#about" className="nav__link">Acerca de</a>
                        </li>
                        <li className="nav__item">
                            <a href="{{ route('main') }}#play" className="nav__link">Jugar</a>
                        </li>

                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x' ></i>
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-grid-alt'></i>
                </div>
            </nav>
            </header>
        </BrowserRouter>
  )
}
