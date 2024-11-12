import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import { ClerkProvider  } from '@clerk/clerk-react'
import Profile from './Profile/profile.jsx'
import AddListing from './Add_Listing/index.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Home /> 
  },
  {
    path:"/profile",
    element: <Profile /> 
  },
  {
    path:"/add-listing",
    element: <AddListing /> 
  },
])
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
