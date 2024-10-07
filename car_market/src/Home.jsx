import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/header'



function Home() {
  const clickHandler = ()=>{
    window.alert(`hello`)
  }

  return (
    <>
      <Header/>
    </>
  )
}

export default Home
