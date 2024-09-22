import React, { useEffect, useState } from 'react';

const App = () => {
    let API = 'https://pokeapi.co/api/v2/pokemon/pikachu'
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)
    const fetchPokemon = async () => {
        try {
            let response = await fetch(API)
            let data = await response.json()
            setPokemon(data)
            setLoading(false)
        } catch (error) {
            setLoadingError(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    console.log(pokemon);
    if (loading) return <h1>Loading ...</h1>
    if (loadingError) return <h1>{loadingError}</h1>

    return (

        <div className="w-full h-screen bg-[#eff3ff] flex flex-col">
            <div className="flex flex-col items-center mt-20">
                <h1 className='text-3xl font-semibold  tracking-wider'>Let's Catch Pokemon</h1>
                <div className="h-64 w-60 bg-white rounded-[0.2rem]  shadow shadow-white/80 transition ease-out duration-500 hover:shadow-white/90 hover:scale-[1.03] text-center">
                    <div className="w-full flex flex-col justify-center items-center relative ">
                        <span className="w-full h-[60%] transition-all duration-500 ease-in-out rounded-[70%_30%_70%_30%/_30%_30%_70%_70%] hover:rounded-[50%_50%_100%_0%/_99%_100%_1%_1%] rotate-180 bg-[#ebfbf1] flex justify-center items-center top-0 absolute">
                        </span>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            className="w-20 z-10 mt-1.5" // Ensure image is above the background
                        />
                        <h1 className="text-3xl font-semibold z-10 relative mt-auto text-black">{pokemon.name}</h1>
                        <div className='flex px-4 w-full justify-between text-xs mt-6'>
                            <p>Height: <span className='font-bold'>{pokemon.height}</span> </p>
                            <p>Weight: <span className="font-bold">{pokemon.weight}</span> </p>
                            <p>Speed:  <span className='font-bold'>{pokemon.stats[5].base_stat}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App
