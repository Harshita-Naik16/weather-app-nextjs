
import moment from "moment/moment";
import { weatherCodeComponents } from "@/utils/js/WeatherCodeData";

function DailyData({ data, setSelectedDay, selectedDay }) {

    const DayCard = ({ Icon, time, temp, day }) => {
        return <div
            className={`flex flex-col gap-y-4 py-4 px-6 md:px-7 rounded-lg hover:bg-slate-700 transition-all cursor-pointer text-white ${selectedDay.time == time ? "bg-slate-400 hover:bg-slate-400" : ""}`}
            key={time}
            onClick={() => setSelectedDay(day)}
        >
            <div><Icon size={36} /></div>
            <div className="font-normal">{moment(time).format('dddd').slice(0, 3)}</div>
            <div className="font-bold">{Math.floor(temp)}&deg;C</div>
        </div>
    }
    
    return (
        <div className="grid gap-y-2 lg:grid-cols-4 grid-cols-2 place-items-center gap-0 lg:mb-0 mb-8 rounded-lg text-xl bg-slate-800">
            {data.map(day => {
                return <DayCard key={day.time} Icon={weatherCodeComponents[day.weathercode]} time={day.time} temp={day.temperature} day={day} />
            })}
        </div>
    )
}

export default DailyData