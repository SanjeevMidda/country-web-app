import { useEffect, useState } from 'react';
import './index.css';
import search from "./images/search.svg";
import nature from "./images/nature.mp4";

function App() {

  const [flag, setFlag] = useState("");
  const [input, setInput] = useState("");
 

  // useEffect(() => {

    // async function getCountry(){
    //   let request = await fetch(`https://restcountries.com/v3.1/name/${input}`);
    //   let response = await request.json();
  
    //   setFlag(response[0])
    // }

  //   getCountry()
   

  // },[])
      
    async function getCountry(){
      let request = await fetch(`https://restcountries.com/v3.1/name/${input}`);
      let response = await request.json();
  
      setFlag(response[0])

    }


  return (
    <div className="App">
      <video autoPlay loop id='video'>
        <source  src={nature} type='video/mp4'/>
      </video>

        <div className="phone">

          <div className="countryInfo">
            <h2 id='flag'>{flag.flag}</h2>
            <h3>POPULATION: <span>{flag.population}</span></h3>
            <h3>CAPITAL: <span>{flag.capital}</span></h3>
            <h3>CONTINENT: <span>{flag.continents}</span></h3>
            <h3>INTERNET: <span>{flag.tld}</span></h3>



          </div>
          

          <div className="enterContent">
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
            <button onClick={getCountry}>
              <img src={search} alt="" />
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
