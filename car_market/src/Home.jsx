import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/header'
import Hero from './components/Hero'
import Categorice from './components/Categorice'
import MostSearchedCars from './components/MostSearchedCars'



function Home() {

  return (
    <>
      <Header/>
      <Hero/>
      <Categorice/>
      <MostSearchedCars />
    </>
  )
}

export default Home
