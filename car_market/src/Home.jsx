import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/header'
import Hero from './components/Hero'
import Categorice from './components/Categorice'



function Home() {

  return (
    <>
      <Header/>
      <Hero/>
      <Categorice/>
    </>
  )
}

export default Home
