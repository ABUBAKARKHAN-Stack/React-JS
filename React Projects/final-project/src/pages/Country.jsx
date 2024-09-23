import React, { useEffect, useMemo, useState } from 'react'
import { CountiresCard, Loader, useDebounce } from '../components'
import { getCountriesData } from '../API/getCountryData'
import axios from 'axios'

function Country() {
  // State variables
  const [country, setCountry] = useState([]) // Stores the country data
  const [search, setSearch] = useState("") // Holds the search term
  const [filterRegion, setFilterRegion] = useState("all") // Stores selected region for filtering
  const [loading, setLoading] = useState(true) // Loading state

  // Debounce search term for optimized searching
  const debounceSearch = useDebounce(search, 300)

  // Effect to fetch countries data on component mount
  useEffect(() => {
    const controller = new AbortController(); // Controller for aborting fetch

    const fetchCountries = async () => {
      try {
        setLoading(true); // Start loading
        const res = await getCountriesData(controller.signal); // Fetch data
        setCountry(res.data); // Set country data
      } catch (error) {
        if (axios.isCancel(error)) return; // Handle fetch cancellation
        console.log(error.message); // Log other errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCountries(); // Call fetch function

    return () => {
      controller.abort(); // Cleanup on unmount
    };
  }, []);

  // Sorting Functionality
  const sorting = (value) => {
    const sortedCountry = [...country].sort((a, b) => {
      // Sort based on ascending or descending order
      return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
    })
    setCountry(sortedCountry) // Update state with sorted countries
  }

  // Filter Functionality
  const filterData = (country) => {
    // Filter countries based on selected region
    if (filterRegion === "all") {
      return country; // Return all countries if "all" is selected
    } else {
      return country.region === filterRegion // Filter by selected region
    }
  }

  // Search Functionality 
  const searchCountry = (country) => {
    // Check if the country matches the search term
    if (debounceSearch) {
      return country.name.common.toLowerCase().includes(debounceSearch.toLowerCase())
    } else {
      return true; // Return true if no search term
    }
  }

  // Main Function For Search and Filter
  const filteredCountries = useMemo(() => {
    return country.filter((filterCountry) => searchCountry(filterCountry) && filterData(filterCountry))
  }, [country, debounceSearch, filterRegion]) // Recalculate when dependencies change

  // Log search term and filtered countries for debugging
  console.log(debounceSearch, filteredCountries);

  // Render Loader while data is being fetched
  if (loading) return <Loader />

  return (
    <section className='w-full max-w-screen-2md mx-auto flex flex-col px-8 xl:px-0'>

      {/* Search and Filter Controls */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 mx-auto justify-between '>
        <input
          type="text"
          placeholder='Search Country...'
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state on input change
          className='col-span-1 order-1 sm:order-1 placeholder:text-white bg-zinc-900 font-[200] tracking-wider text-[11px] px-2 py-1 border rounded-xl w-full'
        />

        <button
          onClick={() => sorting("asc")} // Sort ascending
          className='col-span-1 order-4 outline-none sm:order-2 w-full tracking-wider text-[11px] px-6 py-2 rounded-xl'>
          ASC
        </button>

        <button
          onClick={() => sorting("desc")} // Sort descending
          className='col-span-1 w-full order-3 sm:order-3 tracking-wider text-[11px] px-6 py-2 border rounded-xl'>
          DESC
        </button>

        <select
          onChange={(e) => setFilterRegion(e.target.value)} // Update region filter on change
          value={filterRegion}
          className='col-span-1 w-full outline-none order-2 sm:order-4'>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Countries List */}
      <ul className='grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-10'>
        {
          filteredCountries.map((currElem, index) => {
            return (<CountiresCard country={currElem} key={index} />) // Render country cards
          })
        }
      </ul>
    </section>
  )
}

export default Country
