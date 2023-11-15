// Import useState and useEffect hooks from React
import { useState } from 'react'
// Import media assets
import zshmeta from './assets/images/zshmetapunk.svg'
// Import App CSS styles
import './App.css'
// Import PetitZshmeta component
import PetitZshmeta from './components/PetitZshmeta'
// Import Pikamanx component
import Pikamanx from './components/Pikamanx/'
// Import Particles component
import Particles from './components/Particles/'

function App() {

  // Declare state variables for count, currentModalId, and isOpen
  const [count, setCount] = useState(0)


  // Render App component
  return (
    <>
      <div className='App'>
    
        <a href="https://zshmeta.dev" target="_blank">
          <img src={zshmeta} className="zshmeta" alt="zshmeta logo" />
        </a>
      </div>
      <br />
      <h3>(Plus) Vite Zshmeact!</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicked  {count}  times.
        </button>
        <Pikamanx />
        <p>
          <br />
          <code>J'Suis dans ma ... 
          <strong>Paranoïa</strong> <br />
            <em>Paranoiaque... </em> <br />
            <small><em>Laissez Moi Sur Ma Route...</em></small> <br />
            <small><em>J'en ai Plus Rien a Foutre...</em></small>
          </code>
        </p>
        <PetitZshmeta />
      
      <p className="fineprint">
        Based on the Orginal <br />
        <code>yarn create vite </code>
      </p>
     <Particles />
     

  </div>
  </>
  );
}

// Export App component as default
export default App
