import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/header'
import Hero from './components/Hero'



function Home() {

  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}

export default Home
