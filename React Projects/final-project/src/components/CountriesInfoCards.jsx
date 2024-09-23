import React from 'react'
import countriesInfo from '../API/countriesInfo.json'

function CountriesInfoCards({ my = 'my-20' }) {
    const sortedCountriesInfo = countriesInfo.sort((a, b) => {
        return a.countryName.localeCompare(b.countryName)
    })
    return (
        <section className={`${my}`}>
            <h1 className='text-center mx-auto leading-10 text-2xl font-medium w-full'>Here are the Intresing Facts <br /> we're proud of</h1>
            <div className='grid grid-cols-1 xsm:grid-cols-2 2md:grid-cols-3 2xl:grid-cols-4 gap-6 w-full mt-10'>
                {
                    sortedCountriesInfo.map((currElem) => {
                        const { id, countryName, capital, population, interestingFacts } = currElem;
                        return (
                            <div key={id} className='gradient-cards w-full flex flex-col gap-y-3 p-6 rounded-3xl '>
                                <h4 className='font-medium text-lg'>{countryName}</h4>
                                <p className='text-[11px]'><span className='text-white/50'>Capital:</span> <span>{capital}</span></p>
                                <p className='text-[11px]'><span className='text-white/50'>Population:</span> <span>{population.toLocaleString()}</span></p>
                                <p className='text-[11px]'><span className='text-white/50'>Interesting Facts:</span> <span className='tracking-wide'>{interestingFacts}</span></p>
                            </div>
                        );
                    })
                }
            </div>

        </section >
    )
}

export default CountriesInfoCards