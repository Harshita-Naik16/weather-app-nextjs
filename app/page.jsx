"use client";
import CurrentData from "@/components/CurrentData";
import DailyData from "@/components/DailyData";
import Modal from "@/components/Modal";
import SearchBox from "@/components/SearchBox";
import WeatherDetails from "@/components/WeatherDetails";
import { useCallback, useState } from "react";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false)
  const [dailyData, setDailyData] = useState([])
  const [currentCity, setCurrentCity] = useState("Biarritz, FR")
  const [selectedDay, setSelectedDay] = useState({
    precipitation: 0,
    temperature: 0,
    time: new Date(),
    weathercode: 3,
    wind: 0,
    uv: 0
  })

  
  const handleClick = useCallback((city) => {
    const { latitude, longitude } = city;
    setCurrentCity(`${city.name}, ${city.country}`)

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,uv_index_max,precipitation_sum,windspeed_10m_max&timezone=auto`)
    .then(res => res.json())
    .then(data => {
      const dailyDataArr = [];
      const { daily } = data;
      for(let i = 0; i < 4; i++) {
        dailyDataArr.push({
          time: daily?.time[i],
          precipitation: daily?.precipitation_sum[i],
          wind: daily?.windspeed_10m_max[i],
          uv: daily?.uv_index_max[i],
          temperature: daily?.temperature_2m_max[i],
          weathercode: daily?.weathercode[i],
        })
      }
      setDailyData(dailyDataArr)
    })
    
  }, [])

  return (
    <>
      <div className='h-166 w-253 flex lg:flex-row flex-col'>
        {/* left side Data */}
        <CurrentData currentCity={currentCity} selectedDay={selectedDay}/>

        {/* Right side Data */}

        <div className="dailyData mx-auto bg-slate-900 w-1/2 rounded-3xl min-w-80 md:rounded-tr-3xl md:rounded-br-3xl p-14 flex flex-col justify-between">

          {/* precipation, wind and UV data */}
          <WeatherDetails selectedDay={selectedDay}/>

          {/* Dailycard container for 4 days */}
          <DailyData data={dailyData} setSelectedDay={setSelectedDay} selectedDay={selectedDay}/>

          <SearchBox setToggleModal={setToggleModal} />
          {toggleModal && <Modal handleClick={handleClick} setToggleModal={setToggleModal}/>}

        </div>

      </div>
    </>
  )
}
