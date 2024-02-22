import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
/* import Cards from './components/Cards' */ // <---- tu componente Cards
import Footer from './components/Footer'

const dataHero = [
  {
    id: 0,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-1.png',
    title: 'PRODUCTOS AUTOMOTRICES ',
  },
  {
    id: 1,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-2.png',
    title: 'PRODUCTOS DE CONSUMO',
  },
  {
    id: 2,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-3.png',
    title: 'DESTACANDO DESDE 2014',
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/consultag.la/recursos-consultag/Home/Slider/sliderHome-3.png',
    title: 'MEJORANDO DESDE 2014',
  },
  // ... otros objetos
];

function App() {

  return (
    <>
      <Navbar />
      
      <section className='hero-section'>
        <div className='slider-space'>
          <Slider />
        </div>
      </section>

      <section className=''>
        {/* Aqui va tu Cards Components */}
      </section>

      <Footer />
    </>
  )
}

export default App;
