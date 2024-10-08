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
      <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicked  {count}  times.
        </button>
        <Pikamanx />
        <p>
          <br />
          <code>Free Palestine
          <strong></strong> <br />
            <em>فلسطين الحرة </em> <br />
            <small><em>自由巴勒斯坦</em></small> <br />
            <small><em>свободная Палестина</em></small>
          </code>
        </p>
        <PetitZshmeta />
      
      <p className="fineprint">
      Liberez la Palestine<br />
      </p>
     <Particles />
     

  </div>
  </>
  );
}

// Export App component as default
export default App
