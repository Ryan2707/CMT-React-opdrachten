import './App.css'
import Logo from './assets/Logo.png'
import Foto from './assets/foto.png'

function App() {

  return (
    <section className=" flex flex-col w-screen h-screen">

      <section className='place-self-center flex flex-col' >
      <h1 className= 'flex items-center flex-col'>Opdracht 9 - Tailwind </h1>
      <div className='flex flex-row items-center justify-center mt-8 mb-8 gap-2 font-bold text-4xl'>
      <img className= '' src={Logo} alt="Logo" /> 
      <h2 className=''>Work<span className='text-blue-600'>cation</span></h2>
      </div>

      <img className='rounded-lg' src={Foto} alt="Foto" />

      <h2 className='mt-8 mb-8 font-bold text-2xl'>You can work from anywhere. <span className='text-blue-600'>Take advantage of it.</span></h2>
      <p className='mb-8'>Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're nog on vacation.</p>
      <button className=' w-56 bg-blue-600 text-white px-4 py-2 rounded'>BOOK YOUR ESCAPE</button>
      </section>

    </section>
  )
}

export default App
