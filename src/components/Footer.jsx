import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../components/footer.css'
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';


const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <div className='asistencia'>
                    <p className='asistencia-text'>ASISTENCIA</p>
                    <ul className='asistencia-ul'>
                        <li><NavLink to="/about">Dudas Frecuentes</NavLink></li>
                        <li><NavLink to="/about">Sobre Nosotros</NavLink></li>
                        <li><NavLink to="/about">Realizar Pedido</NavLink></li>
                    </ul>
                    <ul className='asistencia-ul-2'>
                        <li><NavLink to="/about">Contacto</NavLink></li>
                        <li><NavLink to="/about">Envío</NavLink></li>
                        <li><NavLink to="/about">Pago</NavLink></li>
                    </ul>
                </div>
                <div className='footer-copyright'>
                    <p>
                        © "Tienda" 2023. Todos los derechos reservados.
                        <br />
                        Colombia, calle monda 123 - CP 456 Capital federal, Bogotá, Colombia.
                        <br />
                        *¿Con qué podemos ayudarte? <Link to="/">Resolve tus dudas en nuestra sección de ayuda</Link>
                    </p>
                </div>
                <div className='footer-redes'>
                    <p className='redes-text'>SIGUENOS</p>
                    <ul className='footer-redes-ul'>
                        <li><AiOutlineInstagram/></li>
                        <li><AiOutlineFacebook/></li>
                    </ul>
                </div>

            </footer>
        </>
    );
}

export default Footer;