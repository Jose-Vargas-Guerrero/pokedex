import React, { useState } from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import Card from './cards/Card';

function PokeList() {
  const [limit, setLimit] = useState(20);
   const handleLimit = () =>{
    setLimit(limit + 10)
   } 
    const {pokemon,loading,error} = useFetchPokemon(limit);
    console.log(limit)
  
    if(loading) return <p>cargando pokemons...</p>
    if(error) return <p>error... {error}</p>
  return (
    <div className='poke-list'>
         <ul className=" grid grid-cols-4">
      {
        pokemon.map((e)=> (
        <Card
        key={e.name}
        titleHeader={e.name}
        imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.url.split("/")[6]}.png`}
        actionLabel="ver mas"
        />
        ))
      }
     </ul>
     <div className='flex justify-center mt-4 py-2'>
           <button className="bg-orange-300 py-2 px-4 rounded-xl cursor-pointer" onClick={() => handleLimit()}>next</button>
     </div>
        
    </div>
  )
}

export default PokeList