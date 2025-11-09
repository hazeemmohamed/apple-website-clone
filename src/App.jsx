import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Ad from './components/Ad'
import Hero from './components/Hero'
// import ImageComponent1 from './components/ImageComponent1'
// import ImageComponent2 from './components/ImageComponent2'
import ImageComponent3 from './components/ImageComponent3'
import ImageSliderComp from './components/ImageSliderComp'
import Footer from './components/Footer'



function App() {

  return (
    <>
     <Navbar></Navbar>
     <Ad></Ad>
     <Hero></Hero>
     <ImageComponent3></ImageComponent3>
     <ImageSliderComp></ImageSliderComp>
     <Footer></Footer>
    </>
  )
}

export default App
