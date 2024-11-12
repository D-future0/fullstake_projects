import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <Header/>
        <div style={{padding:"2rem"}}> 
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h2>My Listing</h2>
                <Link to={"/add-listing"}>
                <Button>Add New Listing</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile