export const PokemonCard = ({ pokemondata }) => {
    return (<>

        <div className="h-80  w-[90vw] s:w-[70vw] xs:w-[60vw] sm:w-60 bg-black/50 text-white rounded-[0.2rem] shadow shadow-black transition ease-out duration-500 hover:scale-[1.03] text-center">
            <div className="w-full h-full flex flex-col justify-start items-center   gap-3 text-[10px]">
                <span className="w-full h-[38%] flex justify-center items-center py-4 transition-all duration-500 ease-in-out rounded-[40%_70%_70%_40%/_40%_40%_70%_70%] hover:rounded-[50%_50%_100%_0%/_99%_100%_1%_1%] rotate-180 bg-[#ebfbf1]">
                    <img
                        src={pokemondata.sprites.other.dream_world.front_default}
                        alt={pokemondata.name}
                        className="w-[45%] h-[6.5rem] rotate-180 text-black text-xl font-semibold"
                    />
                </span>
                <p className="font-semibold text-xl">{pokemondata.name}</p>
                <div className="flex text-sm font-semibold text-white px-4 py-1 rounded-full bg-green-500">
                    <p>
                        {pokemondata.types.map((currval) =>
                            currval.type.name.charAt(0).toUpperCase() + currval.type.name.slice(1)
                        ).join(', ')}
                    </p>
                </div>

                <div className="flex py-2 px-4 w-full justify-between ">
                    <p><span className="font-semibold">Height: </span>{pokemondata.height}</p>
                    <p><span className="font-semibold">Weight: </span>{pokemondata.weight}</p>
                    <p><span className="font-semibold">Speed: </span>{pokemondata.stats[5].base_stat}</p>
                </div>
                <div className="flex px-4 w-full justify-between">
                    <span className="flex  flex-col-reverse">
                        <p className="font-semibold">Experience:</p>
                        <p>{pokemondata.base_experience}</p>
                    </span>
                    <span className="flex flex-col-reverse">
                        <p className="font-semibold">Attack:</p>
                        <p>{pokemondata.stats[1].base_stat}</p>
                    </span>
                    <span className="flex flex-col-reverse">
                        <p className="font-semibold">Abilities:</p>
                        <p>{pokemondata.abilities[0].ability.name}</p>
                    </span>
                </div>
            </div>
        </div>
    </>)
}