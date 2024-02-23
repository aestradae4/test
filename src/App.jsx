import React from 'react'
import './App.css'
import './components/styles/Cards.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
// import Footer from './components/Footer'
import pizzasList from './components/Cards'; 

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

      <section className='cards'>
      {pizzasList.map(pizza => (
        <div key={pizza.id} className='pizza-card'>
          <img src={pizza.url} alt={pizza.title} />
          <h3>{pizza.title}</h3>
        </div>
      ))}
    </section>


      {/* <Footer /> */}
    </>
  )
}

export default App;
