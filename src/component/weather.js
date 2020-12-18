import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value });
        }
        if (name == "country") {
            setForm({ ...form, country: value });
        }
    };
    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br />
            <form>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={(e) => handleChange(e)}
                />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={(e) => handleChange(e)}
                />
                <button className="getweather" onClick={(e) => weatherData(e)}>
                    Submit
        </button>
            </form>

            {/* {console.log(weather)} */}
            {weather.data != undefined ? (
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null}
        </div>
    );
}

export default Weather;