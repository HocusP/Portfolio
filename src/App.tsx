import React from 'react';
import './App.css';
import fire from './assets/fire.jpg';

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
      <img src={fire} className='centerimg' alt="fire"></img>

      <form>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            aria-describedby="email-help"
            placeholder="Enter email"
          />
          <small id="email-help">Contact me!</small>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
