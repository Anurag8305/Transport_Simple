import React from 'react'
import Footer from '../Components/Footer'
import BlueComponent from '../Components/BlueComponent'
import Investors from '../Components/Investors'
import Mentor from '../Components/Mentor'
import Achievement from '../Components/Achievement'
import Cards from '../Components/Cards'
import Benefits from '../Components/Benefits'

const Homepage = () => {
  return (
    <div>
    <Cards />
    <BlueComponent />
    <Mentor />
    <Investors />
    <Benefits />
    <Achievement />
        <Footer />
    </div>
  )
}

export default Homepage