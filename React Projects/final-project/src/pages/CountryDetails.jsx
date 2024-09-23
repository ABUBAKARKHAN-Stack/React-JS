import React, { useEffect, useState, useTransition } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCountryDetails } from '../API/getCountryData';
import { Loader } from '../components';

function CountryDetails() {
    const param = useParams()
    const [countryDetail, setCountryDetail] = useState([])
    const [loading, setLoading] = useState(true)

    const country = async () => {
        try {
            const res = await getCountryDetails(param.id)
            console.log(res.data);
            setCountryDetail(res.data)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        country()
    }, [])

    if (loading) return <Loader />

    return (
        <section className='gradient-cards my-10'>
            <div className='w-full h-full max-w-screen-2md py-8 px-4 sm:px-8 xl:px-0 mx-auto'>
                {countryDetail.map((each, i) => {
                    return (
                        <div key={i} className='grid grid-cols-1 gap-8 2md:grid-cols-2 w-full mb-8'>
                            <div className='w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 my-auto mx-auto'>
                                <img src={each.flags.svg} alt={each.name.common} className=' w-full h-full' />
                            </div>
                            <div className='flex flex-col gap-y-4 text-[10px] sm:text-[12px] md:text-[14px] tracking-wider'>
                                <h2 className='text-xl sm:text-2xl font-semibold'>{each.name.official}</h2>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Native Common Names:</span>
                                    <span className='font-light'>
                                        {Object.keys(each.name.nativeName).map((key) => each.name.nativeName[key].common).join(", ")}
                                    </span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Native Official Names:</span>
                                    <span className='font-light'>
                                        {Object.keys(each.name.nativeName).map((key) => each.name.nativeName[key].official).join(", ")}
                                    </span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Population:</span>
                                    <span className='font-light'>{each.population.toLocaleString()}</span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Region:</span>
                                    <span className='font-light'>{each.region}</span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Sub Region:</span>
                                    <span className='font-light'>{each.subregion}</span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Capital:</span>
                                    <span className='font-light'>{each.capital}</span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Top Level Domain:</span>
                                    <span className='font-light'>{each.tld.join(", ")}</span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Currencies:</span>
                                    <span className='font-light'>
                                        {Object.keys(each.currencies).map((key) => each.currencies[key].name).join(", ")}
                                    </span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Symbol:</span>
                                    <span className='font-light'>
                                        {Object.keys(each.currencies).map((key) => each.currencies[key].symbol).join(", ")}
                                    </span>
                                </div>

                                <div className='flex flex-wrap gap-x-1'>
                                    <span className='text-white/50'>Languages:</span>
                                    <span className='font-light'>
                                        {Object.keys(each.languages).map((key) => each.languages[key]).join(", ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Link to={"/country"}>
                    <button className='w-fit mx-auto block mt-8 font-[200] tracking-wider text-[11px] px-6 py-2 border rounded-xl'>
                        Go Back
                    </button>
                </Link>
            </div>
        </section>

    )
}

export default CountryDetails