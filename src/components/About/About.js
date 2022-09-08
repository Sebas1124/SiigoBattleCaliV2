import React from 'react'

export const About = () => {
  return (
    <>
        <div className="specialty section container" id="about">
        <div className="specialty__container">
            <div className="specialty__box">
                <h2 className="section__title">
                    Disfruta de nuestro espacio de descanso laboral
                </h2>

                <div>
                    <a href="#" className="button specialty__button">Ver más</a>
                </div>
            </div>

            <div className="specialty__category">
                <div className="specialty__group specialty__line">
                    <img src="{{ asset('img/specialty1.png') }}" alt="" className="specialty__img"/>

                    <h3 className="specialty__title">Relajate del trabajo</h3>
                    <p className="specialty__description">
                        Nosotros nos encargamos de desarrollar un juego para que compartas con tus amigos y te distraigas un rato de tus labores
                    </p>
                </div>

                <div className="specialty__group specialty__line">
                    <img src="" alt="" className="specialty__img"/>

                    <h3 className="specialty__title">Recomendado por Psicologos</h3>
                    <p className="specialty__description">
                        Según el área de recursos humanos, nuestros trabajadores deben tener pausas activas
                    </p>
                </div>

                <div className="specialty__group">
                    <img src="" alt="" className="specialty__img"/>

                    <h3 className="specialty__title">Disfrutalo desde donde quieras</h3>
                    <p className="specialty__description">
                        Disfruta de este juego desde tu celular, tablet o computador
                    </p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
