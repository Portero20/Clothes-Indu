import React from 'react'

const Testimonios = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mb-10 mt-20 dark:text-black text-white transition-colors'>Testimonios</h2>

            <div className='flex justify-center gap-10 flex-wrap lg:grid lg:place-items-center text-center'>

                <div className='dark:bg-slate-400 bg-zinc-900 w-4/12 p-20 rounded-xl flex justify-center gap-10 lg:w-3/5 lg:flex-col' data-aos="flip-left">
                    <div className="avatar lg:flex lg:justify-center hover:scale-105 transition-all">
                        <div className="w-24 rounded-full ring dark:ring-slate-400 ring-offset-base-100 ring-offset-2 ring-primary">
                            <img src="https://img.freepik.com/foto-gratis/retrato-joven-apuesto-hace-buen-gesto-demuestra-que-acuerdo-gusta-idea-sonrie-felizmente-usa-gafas-opticas-sombrero-amarillo-camiseta-modelos-interior-bien-gracias-signo-mano_273609-30676.jpg?w=740&t=st=1665381783~exp=1665382383~hmac=d2a37d55928f87bf36b798e53c149bdb2e7aecaae8d6283a3a6212923937d1a6" />

                        </div>
                    </div>

                    <div className='flex self-center flex-col'>
                        <p className='dark:text-white text-primary font-extrabold text-md'>James Blunt</p>
                        <p className='text-white text-md'>Excelente servicio de atención al cliente</p>
                    </div>

                </div>


                <div className='dark:bg-slate-400 bg-zinc-900 w-4/12 p-20 rounded-xl flex justify-center gap-10 lg:w-3/5 lg:flex-col' data-aos="flip-left">
                    <div className="avatar lg:flex lg:justify-center hover:scale-105 transition-all">
                        <div className="w-24 rounded-full ring dark:ring-slate-400 ring-offset-base-100 ring-offset-2 ring-primary">

                            <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1665381697~exp=1665382297~hmac=b7f5946a420a5e9b0d80cd516d53c7ae3d4db1e4c1b494bf67ea75a265970af0" />

                        </div>
                    </div>

                    <div className='flex self-center flex-col'>
                        <p className='dark:text-white text-primary font-extrabold text-md'>Jessica Jimenez</p>
                        <p className='text-white text-md'>Excelente servicio de atención al cliente</p>
                    </div>

                </div>

                <div className='dark:bg-slate-400 bg-zinc-900 w-4/12 p-20 rounded-xl flex justify-center gap-10 lg:w-3/5 lg:flex-col' data-aos="flip-left">
                    <div className="avatar lg:flex lg:justify-center hover:scale-105 transition-all">

                        <div className="w-24 rounded-full ring dark:ring-slate-400 ring-offset-base-100 ring-offset-2 ring-primary">

                            <img src="https://img.freepik.com/foto-gratis/varon-joven-mirando-camiseta-rosa-mirando-alegre-vista-frontal_176474-84436.jpg?t=st=1665381887~exp=1665382487~hmac=6aea771fbc3e85eeeb4f3e48d8fd213ff1256935b2c0e7b3de97843be61443f5" />

                        </div>
                    </div>

                    <div className='flex self-center flex-col'>
                        <p className='dark:text-white text-primary font-extrabold text-md'>Paul Chavez</p>
                        <p className='text-white text-md'>Excelente servicio de atención al cliente</p>
                    </div>

                </div>

                <div className='dark:bg-slate-400 bg-zinc-900 w-4/12 p-20 rounded-xl flex justify-center gap-10 lg:w-3/5 lg:flex-col' data-aos="flip-left">
                    <div className="avatar lg:flex lg:justify-center hover:scale-105 transition-all">
                        <div className="w-24 rounded-full ring dark:ring-slate-400 ring-offset-base-100 ring-offset-2 ring-primary">
                            <img src="https://img.freepik.com/foto-gratis/retrato-mujer-asiatica-pelo-oscuro-serio-mantiene-dedo-barbilla-mira-misteriosamente-al-frente-considera-algo-vestido-jersey-azul-aislado-sobre-pared-marron_273609-53356.jpg?w=740&t=st=1665382067~exp=1665382667~hmac=ca99db58bbaf0237e009061f95387d62ccacc58ff1a0f4a5e68cc8e6d2bd1ee1" />

                        </div>
                    </div>

                    <div className='flex self-center flex-col'>
                        <p className='dark:text-white text-primary font-extrabold text-sm'>Nicole Ramirez</p>
                        <p className='text-white text-md'>Excelente servicio de atención al cliente</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Testimonios