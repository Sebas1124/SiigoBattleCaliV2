import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Siigo Battle Cali.</h1>

            <div className="footer__content grid">
                <div className="footer__data">
                    <p className="footer__description">
                        Subscribe
                    </p>

                    <div className="footer__newsletter">
                        <input type="email" placeholder="Your email address" className="footer__input" disabled/>
                        <button className="footer__button">
                            <i className='bx bx-right-arrow-alt' ></i>
                        </button>
                    </div>
                </div>

                <div className="footer__data">
                    <h2 className="footer__subtitle">
                        Address
                    </h2>
                    <p className="footer__information">
                        Calle 12361982. 
                        Cali, Colombia 🟡🔵🔴
                    </p>
                </div>

                <div className="footer__data">
                    <h2 className="footer__subtitle">
                        Contact
                    </h2>
                    <p className="footer__information">
                        +57 3115440812
                        sebas.rosero.lopez@gmail.com
                    </p>
                </div>

                <div className="footer__data">
                    <h2 className="footer__subtitle">
                        Office
                    </h2>
                    <p className="footer__information">
                        Monday - Friday 
                        7AM - 5PM
                    </p>
                </div>
            </div>

            <div className="footer__group">
                <ul className="footer__social">
                    <a href="https://www.facebook.com/" className="footer__social-link">
                        <i className='bx bxl-facebook' ></i>
                    </a>
                    <a href="https://www.instagram.com/" className="footer__social-link">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://twitter.com/" className="footer__social-link">
                        <i className='bx bxl-twitter' ></i>
                    </a>
                </ul>

                <span className="footer__copy">
                    <a href="http://sebasportafolio.com">Sebastián Rosero Lopez y Jorge Elias Santos Todos los derechos reservados</a>
                </span>
            </div>
            </div>
        </footer>
    </>
  )
}
