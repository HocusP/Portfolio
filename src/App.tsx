import './App.css'
import fire from './assets/fire.jpg'

function App() {

  return (
    < >
  <h1> Portfolio </h1>
  <p> Håkon Stokkenes </p>
  <img src={fire}></img> 
    <div className="container">
      <button className="item item-1">Home</button>
      <button className="item item-2">Projects</button>
      <button className="item item-3">info</button>
    </div>


    </>
    
  )
  
}

export default App