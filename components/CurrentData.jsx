import { SlLocationPin } from "react-icons/sl";
import moment from "moment/moment";
import { weatherCodeComponents, weatherLabelMap } from "@/utils/js/WeatherCodeData";

function CurrentData({currentCity, selectedDay}) {
    const { time, temperature, weathercode } = selectedDay;
    let Icon = weatherCodeComponents[weathercode];

    return (
        <div className='currentDayData rounded-3xl min-w-80 mx-auto flex flex-col justify-between pl-16 md:items-start w-1/2 lg:px-8 px-4 md:py-10 py-5 md:scale-105 '>
            <div className="flex flex-col justify-between items-start">
                <span className="font-bold text-3xl lg:text-4xl">{moment(time).format("dddd")}</span>
                <span className="font-medium mt-2 md:mb-4 mb-2 text-lg lg:text-xl">{moment(time).format("Do MMMM YYYY")}</span>
                <div className="flex items-center text-lg lg:text-xl mb-12 lg:mb-0 font-semibold"><SlLocationPin /> <span className="ml-2">{currentCity}</span></div>
            </div>
            <div>
                <div className="font-bold text-5xl lg:text-7xl"><Icon /></div>
                <div className="font-bold text-4xl lg:text-5xl mt-2 mb-3">{temperature}&deg;C</div>
                <div className="font-bold text-2xl lg:text-3xl">{weatherLabelMap[weathercode]}</div>
            </div>
        </div>
    )
}

export default CurrentData
