import React from 'react'
import { HeroSection , CountriesInfoCards } from '../components'

function Home() {
  return (
    <section className='w-full max-w-screen-2md mx-auto px-8 xl:px-0  flex flex-col'>
      <HeroSection />
      <CountriesInfoCards my='my-0' />
    </section>
  )
}

export default Home