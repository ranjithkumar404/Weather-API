import React, { useEffect, useState } from "react";
import axios from 'axios';
import weather from './assets/weather1.jpg'

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=199625b591add563396e37f842231210`
  const get = async (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data);
      })
      setLocation('');
    }
  };


  return (
    <div className="App flex items-center justify-center">
      <img className="w-screen h-screen " src={weather} alt="" />
      <div className="absolute text-white grid place-items-center justify-items-center  w-full h-full top-0 left-0 bg-slate-800/20" >
        <div className="top-2 ">
          <input value={location} className="rounded-md focus:outline-none text-white placeholder-white  bg-slate-500/20 p-3" onChange={e => setLocation(e.target.value)} onKeyUp={get} type="text" placeholder="Enter the Location" />
        </div>
        <div className=" flex sm:space-x-32  md:space-x-80" >
          <div>
            <div >
              <p className="text-3xl ">{data.name}</p>

            </div>
            <div>
              <p className=" text-9xl">{data.main ? data.main.temp : null}°F</p>
            </div>
          </div>

          <div className=" -rotate-90">
            <p className="text-3xl">{data.main ? data.weather[0].main : null}</p>
          </div>
        </div>
        <div className="flex text-center   p-4 rounded-md space-x-5 bg-gray-200/20">
          <div className="" >
            <p className="font-bold text-3xl">{data.main ? data.main.feels_like : null}°F</p>
            <p className="text-xl">Feels like </p>
          </div>
          <div>
            <p className="font-bold text-3xl">{data.main ? data.main.humidity : null}</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-3xl">{data.main ? data.wind.speed : null}MPH</p>
            <p className="text-xl">Wind Speed</p>
          </div>
        </div>
      </div>

    </div>


  );
}

export default App;
