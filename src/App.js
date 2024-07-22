import axios from "axios";
import { useState } from "react";
import Weatherimage from "./Weatherimage";

function App() {

  const [city, setcity] = useState("")
  const [weather, setweather] = useState("")
  const [degree, setdegree] = useState("")
  const [humidity, sethumidity] = useState("")
  const [temperature, settemperature] = useState("")
  const [description, setdescription] = useState("")


  const handlechange = (event) => {
    setcity(event.target.value)
  }

  const getweather = () => {
    var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81abb8705cec4728e1eba07dd64a3770`)

    data.then(function (apidata) {
      setweather(apidata.data.weather[0].main)
      var degree = Math.floor(apidata.data.main.temp - 273.15)
      setdegree(degree + " °C")
      sethumidity(apidata.data.main.humidity + " %")
      settemperature(apidata.data.main.temp)
      setdescription(apidata.data.weather[0].description)
    })
  }

  return (
    <div className="bg-gray-800 w-full p-20">
      <div className='bg-white text-black p-10 flex flex-col gap-4' >
        <h1 className="text-4xl">Weather Report</h1>
        <p className="text-2xl">I can give you a weather report about your city!</p>
        <div>
          <input type="text" placeholder='Enter Your City Name' className="border solid-black p-1 text-2xl  mt-2" onChange={handlechange} /><br />
          <button className="bg-black text-white mt-5 p-2 text-2xl mb-2" onClick={getweather} >Get Report</button>
        </div>


        <div class="w-full lg:w-1/2 flex ml-0">
          <div class="lg:my-3 bg-yellow-300 text-black p-8 w-full flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <p className="text-2xl"><b>Weather:</b></p>
              <div className="flex flex-row gap-2 text-center">
                <Weatherimage weather={weather}/>
                <p className="text-2xl">{weather}</p>
              </div>

            </div>
            <div className="flex flex-row justify-between">
              <p className="text-2xl"><b>Degree:</b></p>
              <p className="text-2xl">{degree}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-2xl"><b>humidity:</b></p>
              <p className="text-2xl">{humidity}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-2xl"><b>Temperature:</b></p>
              <p className="text-2xl">{temperature}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-2xl"><b>Description:</b></p>
              <p className="text-2xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
