"use client"
import useDebounce from '@/hooks/useDebounce';
import React, { useEffect, useState } from 'react'

function Modal({ handleClick, setToggleModal }) {
    const [value, setValue] = useState("");
    const [showCities, setShowCities] = useState(false);
    const [cities, setCities] = useState([]);
    const debouncedValue = useDebounce(value, 500)

    useEffect(() => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${debouncedValue}`)
            .then(res => res.json())
            .then(data => {
                if (data?.results.length == "") {
                    setShowCities(false)
                    return
                }else {
                    setCities(data.results)
                    setShowCities(true)
                }

            })
    }, [debouncedValue])

    function handleCityClick(city) {
        setShowCities(false)
        setToggleModal(false)
        handleClick(city)
    }

    return (
        <div className='modalBg w-screen h-screen fixed top-0 left-0 flex flex-col items-center  justify-center bg-sky-50'>
            <input
                type='text'
                placeholder='Enter your location'
                className='p-4 text-black w-72 lg:w-96 rounded-lg'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            {showCities &&
                <ul className='rounded-lg w-72 lg:w-96 my-1 bg-slate-700'>
                    {cities.map(city => {
                        return <li
                            key={city.id}
                            onClick={() => handleCityClick(city)}
                            className='p-4  hover:bg-gradient-to-r from-cuscyan rounded-lg to-cusblue cursor-pointer hover:transition-all duration-200'
                            >
                            {city.name}, {city.admin1}, {city.country}
                        </li>
                    })}
                </ul>}
        </div>
    )
}

export default Modal
