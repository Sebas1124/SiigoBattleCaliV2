import React from 'react'

import './nav_help';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { About } from '../About/About';

import  Logo  from '../../assets/images/siigologo.png';
import { ErrorPage } from '../404/ErrorPage';


export const Navbar = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={ <ErrorPage/> }/>
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
                            <Link to='/' className="nav__link active-link">Inicio</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/' className="nav__link ">Acerca de</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/' className="nav__link ">Jugar</Link>
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
