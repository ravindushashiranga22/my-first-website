import React from 'react'
import './App.css'
import Header from './components-Header/header';
import Home from './home/Home';
import About from './components-Header/about/About';
import Features from './components-Header/features/Features';
import Menu from './components-Header/menu/Menu';
import Choose from './components-Header/choose/Choose';
import Stats from './components-Header/stats/Stats';
import Gallery from './components-Header/gallery/Gallery';
import Offer from './components-Header/offer/Offer';
import Team from './components-Header/team/Team';
function App() {

  return (<>
   <Header/>
   <Home />
   <About />
   <Features />
   <Menu />
   <Choose/>
   <Stats/>
   <Gallery />
   <Offer />
   <Team />
  </>) 
  
}

export default App

