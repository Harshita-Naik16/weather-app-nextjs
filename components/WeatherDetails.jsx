import React from 'react'

function WeatherDetails({selectedDay}) {
    const { precipitation, wind, uv } = selectedDay;

    return (
        <div className="flex flex-col gap-y-4 lg:mb-0 mb-8">
            <div className="flex lg:flex-row flex-col w-full justify-between text-2xl lg:text-3xl">
                <span className="font-bold">PRECIPITATION</span>
                <span className="font-medium text-xl lg:text-2xl">{precipitation} mm</span>
            </div>
            <div  className="flex lg:flex-row flex-col w-full justify-between text-2xl lg:text-3xl">
                <span className="font-bold">WIND</span>
                <span className="font-medium text-xl lg:text-2xl">{wind} km/h</span>
            </div>
            <div  className="flex lg:flex-row flex-col w-full justify-between text-2xl lg:text-3xl">
                <span className="font-bold">UV</span>
                <span className="font-medium text-xl lg:text-2xl">{uv}</span>
            </div>
        </div>
    )
}

export default WeatherDetails
