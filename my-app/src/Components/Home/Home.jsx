import React from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
    <Header /><Hero />
    </div>

  )
}
