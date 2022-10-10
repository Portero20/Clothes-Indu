import React from 'react'
import DarkMode from '../../hook/DarkMode'
import Bienvenida from '../Bienvenida/Bienvenida'
import Cards from '../Cards/Cards'
import Testimonios from '../Testimonios/Testimonios'
import Formulario from '../Formulario/Formulario'
import BackToTop from '../BackToTop/BackToTop'

const NavBar = ({ onClick }) => {
    return (
        <div>

            <div className="navbar dark:bg-white bg-zinc-800 dark:text-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><a>Inicio</a></li>
                            <li><a href="#mejores">Los mejores</a></li>
                            <li><a href='#testimonio'>Testimonios</a></li>
                            <li><a href='#contacto'>Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">ClothesIndu 👕</a>
                </div>
                <div className="navbar-end">
                    <DarkMode onClick={onClick} />
                </div>
            </div>

            <section>
                <div className='dark:bg-slate-600 bg-slate-800 text-white'>
                    <Bienvenida/>
                </div>
                <div id='mejores'>

                    <Cards/>

                </div>
                <div id='testimonio'>
                    <Testimonios/>
                </div>

                <div id='contacto'>
                    <Formulario/>
                </div>

                <div>
                    <BackToTop/>
                </div>

            </section>



        </div>
    )
}

export default NavBar