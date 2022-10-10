import React from 'react'


const Footer = () => {
    return (
        <div>

            <footer className="footer footer-center p-10 dark:bg-white bg-zinc-800 text-base-content rounded">
                <div className="grid grid-flow-col gap-4 dark:text-black text-white">
                    <div className='flex'>
                        <i class="fa-solid fa-shirt mx-2 text-xl self-center"></i>
                        <h4 className='text-xl'>Clothes Indu</h4>
                    </div>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 dark:text-black text-white">
                        <a className='hover:rotate-12 transition-all' href='https://www.linkedin.com/in/exequiel-portero/' target="_blank"><i className="fa-brands fa-linkedin-in text-2xl"></i></a>
                        <a className='hover:rotate-12 transition-all' href='https://github.com/Portero20'><i className="fa-brands fa-github text-2xl"></i></a>
                    </div>
                </div>
                <div className='dark:text-black text-white'>
                    <p>Copyright © 2022 - Todos los derechos reservados</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer