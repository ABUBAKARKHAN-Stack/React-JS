import { IoIosSearch } from 'react-icons/io';
export const Navbar = ({ searchData, setSearchData }) => {
    return (
        <nav className='flex flex-col w-full max-w-full md:flex-row justify-between items-center py-4  px-8 bg-black/20'>
            <div className="logo w-full  flex justify-center md:justify-start  ">
                <img src="./nav-logo.png" alt="Pokemon-Logo" className='w-auto h-[6rem] object-contain transition-transform duration-500 ease-out hover:scale-90' />
            </div>
            <div className="flex flex-grow w-[95vw] md:w-1/2 lg:w-2/3 max-w-screen-lg justify-between transition-colors ease-in duration-500 bg-transparent hover:bg-black/40 border rounded-lg overflow-hidden">
                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    placeholder="Search Pokémon"
                    className="w-full text-sm bg-transparent outline-none py-2 px-3 text-white placeholder-white"
                />
                <div className="py-2 px-3">
                    <IoIosSearch className="text-2xl font-semibold text-white transition-transform duration-200 hover:scale-95" />
                </div>
            </div>
        </nav>

    )
}