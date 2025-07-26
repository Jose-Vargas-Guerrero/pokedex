import React from 'react'

function Home() {
  return (
    <div className='home-container text-center p-4 bg-gray-100 rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold'>Pokedex Improvisada</h1>
        <p className='mt-2'>Bienvenido a la Pokedex Improvisada, donde puedes encontrar información sobre tus Pokemon favoritos.</p>
        <p className='mt-2'>Para comenzar, dirígete a la sección de "Ver Pokemons" en el menú.</p>
        <p className='mt-2'>¡Disfruta explorando el mundo de los Pokemon!</p>
    </div>
  )
}

export default Home