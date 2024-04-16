import './App.css'
import fire from './assets/fire.jpg'

function App() {

  return (
    <div>

    <div className="container">
      <button className="button-1">Home</button>
      <button className="button-2">Projects</button>
      <button className="button-3">info</button>
      <button className="button-4">Contact</button>
    </div>

  <h1> Portfolio </h1>
  <p> Håkon Stokkenes </p>
  <img src={fire} className='centerimg'></img> 

    </div>
    
  )
  
}

export default App