import './App.css';
import { useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const App = () => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(24);

    // Max number of Pokemon to fetch
    const maxPokemon = 168;

    const fetchPokemon = async () => {
        try {
            setLoading(true);
            const offset = (page - 1) * limit;

            // Ensure we don't request more than maxPokemon
            const fetchLimit = Math.min(limit, maxPokemon - offset);

            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${fetchLimit}&offset=${offset}`);
            let data = await response.json();

            const pokemonData = data.results.map(async (pokemon) => {
                const pokemonRes = await fetch(pokemon.url);
                const data = await pokemonRes.json();
                return data;
            });
            const detailedResponse = await Promise.all(pokemonData);
            setPokemonInfo(detailedResponse);
            setTotalPages(Math.ceil(maxPokemon / limit));
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, [page, limit]);

    const searchData = pokemonInfo.filter((keywords) =>
        keywords.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return (
            <div className="w-full h-screen flex justify-center items-center text-black">
                <h1 className="sm:text-4xl xs:text-2xl text-xl text-center font-bold tracking-widest ping">
                    Hang tight! Your data is on its way
                    <span className="dot-blink dot-1">.</span>
                    <span className="dot-blink dot-2">.</span>
                    <span className="dot-blink dot-3">.</span>
                </h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen flex flex-col gap-5 justify-center items-center text-red-600">
                <p className="sm:text-4xl text-2xl text-center sm:font-bold font-semibold">
                    Oops! Something went wrong. Please try again later.
                </p>
                <p className="sm:text-4xl text-2xl text-center sm:font-bold font-semibold">
                    {error.message}
                </p>
            </div>
        );
    }

    const cardsLayout = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center';
    const textLayout = 'flex justify-center items-center text-red-600 mx-auto';

    return (
        <>
            <Navbar searchData={search} setSearchData={setSearch} />
            <main className="w-full h-screen flex flex-col justify-evenly items-center">
                <h1 className="main-heading w-full font-[arial] text-black/90 text-center text-wrap s:text-4xl lg:text-5xl text-lg font-extrabold py-10 tracking-[0.2em]">
                    Let's Catch Pokémon
                </h1>
                <section className={searchData.length > 0 ? cardsLayout : textLayout}>
                    {searchData.length > 0 ? (searchData.map((currval) => (
                        <PokemonCard key={currval.id} pokemondata={currval} />
                    )))
                        : <p className="text-2xl text-center text-[#334155]">
                            Oops, no Pokémon found for the keyword <strong className='font-extrabold text-red-600'>"{search}"</strong>. Try different keywords or explore other pages to discover more Pokémon.
                        </p>
                    }
                </section>
                <div className="py-4 flex flex-col s:flex-row justify-center gap-4  mt-5">
                    <button
                        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                        className="py-2 px-4 bg-black rounded-full text-white  disabled:bg-gray-500"
                        disabled={page === 1}
                    >
                        Previous
                    </button>
                    <span className="py-2 px-4 text-white font-semibold">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                        className="py-2 px-4 bg-black rounded-full text-white  disabled:bg-gray-500"
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
                <Footer />
            </main>
        </>
    );
};
