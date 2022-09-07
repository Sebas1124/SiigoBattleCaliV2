import React, { useState } from 'react'

import  Logo  from '../../assets/images/siigologo.png';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Modal } from '../Modal/Modal';

export const Play = () => {

    const [modal, setModal] = useState(true)


    const onSubmit = () => {
        setModal(true)
    }

  return (
    <>
        <section className="quality section" id="play">
        <div className="quality__container container">
            <h2 className="section__title">
                Disfruta de nuestro juego
            </h2>

            <div className="quality__content grid">
                <div className="quality__images">
                    <img src={ Logo } alt="" className="quality__img-big"/>
                </div>

                {
                    (modal) 
                        ? <Modal/>
                        : null
                }

                <div className="quality__data">
                    <h1 className="quality__title">Juego de cartas</h1>
                    <h2 className="quality__price">Juega con tus amigos</h2>
                    <span className="quality__special">Ahora</span>
                    <p className="quality__description">
                        hola
                    </p>

                    <div className="quality__buttons">

                            <button onChange={ onSubmit } to="/jugar" className="button">JUGAR</button>

                            <button onChange={ onSubmit } to="/Jugar" className="quality__button">
                                Ver más
                                <i className='bx bx-right-arrow-alt'></i>
                            </button>

                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
