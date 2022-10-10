import React from 'react'
import remera1 from '../../img/levis-chico1.png'
import remera2 from '../../img/levis-chico2.png'
import remera3 from '../../img/levis-chico3.png'
import 'animate.css';



const Bienvenida = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center'>

            <div className='flex'>

                <img className='h-full animate__animated animate__fadeInRight sm:h-56 lg:h-56' src={remera1} alt="" />
                <img className='h-full animate__animated animate__fadeInRight sm:h-48 lg:h-56 ' src={remera2} alt="" />
                <img className='h-full animate__animated animate__fadeInRight sm:h-48 lg:h-56' src={remera3} alt="" />
            </div>

        </div>
    )
}

export default Bienvenida