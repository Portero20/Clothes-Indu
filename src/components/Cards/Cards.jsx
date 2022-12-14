import React from 'react'

const Cards = () => {
  return (
    <div>

      <h2 className='text-center text-3xl mt-12 dark:text-black text-white'>Top de las mejores prendas</h2>

      <div className='flex justify-center gap-28 mt-8 lg:grid flex-wrap xs:justify-center xs:flex'>

        <div className="card w-72 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">

          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/263815-800-800?v=637808699594500000&width=800&height=800&aspect=true" alt="Shoes" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Remera Vans OTW de hombre</h2>
            <p>Remera Vans escote redondo con ribb</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

        <div className="card w-80 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">
          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/262287-800-800?v=637798340801270000&width=800&height=800&aspect=true" alt="Shoes" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Remera Converse Star Chevron</h2>
            <p>Remera Converse cuello redondo 100% algodon</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

        <div className="card w-80 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">
          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/288641-800-800?v=637933972001130000&width=800&height=800&aspect=true" alt="Shoes" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Remera Vans Logo Check de hombre</h2>
            <p>Remera logo Check guresa de 90% algod??n y 10% poli??ster</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

        <div className="card w-80 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">
          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/272974-800-800?v=637849541232230000&width=800&height=800&aspect=true" alt="Adidas" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Buzo adidas Disney Rex unisex</h2>
            <p>Buzo Adidas corte cl??sico en colaboraci??n con Disney</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

        <div className="card w-80 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">
          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/220326-800-800?v=637637748068670000&width=800&height=800&aspect=true" alt="Reebok" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Buzo Reebok Kung Fu Panda</h2>
            <p>Buzo Reebok corte regular en colaboraci??n con Kung Fu Panda</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

        <div className="card w-80 xs:w-64 dark:bg-base-100 dark:text-black bg-slate-800 text-white shadow-2xl" data-aos="fade-up">
          <figure><img className='hover:scale-90 transition-all' src="https://woker.vtexassets.com/arquivos/ids/178909-800-800?v=637419261460600000&width=800&height=800&aspect=true" alt="Fila" /></figure>
          <div className="card-body text-center">
            <h2 className="card-title">Buzo Fila BTS estampa Box unisex</h2>
            <p>Buzo realizado en colaboraci??n con la banda coreana BTS</p>
            <div className="card-actions justify-center">
              <button className="btn dark:bg-white dark:text-black">Comprar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Cards

