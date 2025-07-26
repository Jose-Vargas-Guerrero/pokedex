import { useState, useEffect } from "react";


export function useFetchPokemon(limit) {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    console.log(limit)

    

    useEffect(() => {
        async function fetchPokemonData() {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                if(!response.ok){
                    throw new Error('network reponse was not ok')
                }
                const data = await response.json();
                setPokemon(data.results)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemonData();
    },[limit])


    return {pokemon,loading,error};
}