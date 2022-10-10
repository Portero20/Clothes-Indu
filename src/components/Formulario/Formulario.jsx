import React from 'react'

const Formulario = () => {
    return (
        <div className='grid grid-cols-3 mt-16 justify-items-center md:grid-cols-1'>

            <div className='self-center'>
                <img className='h-80 object-contain rounded-lg sm:h-52' src="https://www.linkaform.com/hubfs/linkaform-2021/img-contactanos.png" alt="" />
            </div>

            <div className='mt-9 mb-28'>

                <form className='flex justify-center flex-col gap-9'>

                    <h2 className=' text-4xl mt-9 dark:text-black text-white transition-colors'>Contacta con nosotros</h2>
                    <input type="text" placeholder="Nombre" className="input w-full  border-gray-900" />
                    <input type="text" placeholder="Apellido" className="input w-full  border-gray-900" />
                    <input type="text" placeholder="Email" className="input w-full  border-gray-900" />
                    <input type="text" placeholder="Escribe un mensaje..." className="input w-full h-24 border-gray-900" />
                    <button className='btn btn-dark'>Enviar</button>

                </form>

            </div>

            <div className='self-center'>
                <img className='h-80 object-contain rounded-lg sm:h-52' src="https://asset-mx.lamudi.com/contact-us/images/svg/support.svg" alt="" />
            </div>

        </div>
    )
}

export default Formulario