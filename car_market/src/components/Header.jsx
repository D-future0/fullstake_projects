import React from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'

const Header = () => {
    const {user, isSignedIn} = useUser()
  return (
    <div className='nav-bar'>
        <img src='/logo.svg' alt='logo' width={50} height={50} />
        <ul className='nav-links'>
            <li>home</li>
            <li>search</li>
            <li>new</li>
            <li>preown</li>
        </ul>
        {isSignedIn?
        <div>
            <UserButton>
            </UserButton>
            <Button>submit listing</Button>
        </div>:
        <Button>submit listing</Button>
        }
    </div>
  )
}

export default Header