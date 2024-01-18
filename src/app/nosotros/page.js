// Tiene que estar dentro de app
// localhost:3000/nosotros

import Header from '@/Components/Header'
import React from 'react'

const Nosotros = () => {
  return (
    <div>
      <Header />
      
      <main className='container m-auto'>
        <h1 className='text-4xl text-blue-600 text-bold my-4'>
          Bienvenido a la página "Nosotros"
        </h1>
        <hr />
        <p className='text-base mt-4'>
          Nuesta historia comienza en 1843 cuando ...
        </p>
      </main>

    </div>
  )
}

export default Nosotros

