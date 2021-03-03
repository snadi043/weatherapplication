const api = {
    key: "0d34e181e0bfd074d660f0a8f69ca254",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn  = document.querySelector(".btn");
btn.addEventListener("click", onClick);

function onClick(event){
    event.preventDefault();
    if (event.type == "click"){
        getWeatherInfo(search.value);
    }
}

function getWeatherInfo() {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json();
    }).then(displayData); 
}

function displayData(response){
    if (response.cod === "404"){
        const error = document.querySelector(".error");
        error.textContent = "Please Enter Valid City Name";
        search.value = "";
    }
    else{
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;  
        const day = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunct(day);

        const Temperature = document.querySelector(".temp");
        Temperature.innerHTML = `Temperature: ${Math.round(response.main.temp)} C`;

        const Weather = document.querySelector(".weather");
        Weather.innerText = `Weather: ${response.weather[0].main}`;

        const Range = document.querySelector(".range");
        Range.innerText = `Temperature Range: ${Math.round(response.main.temp_max)} C / ${Math.round(response.main.temp_min)} C`;

        const Pressure = document.querySelector(".pressure");
        Pressure.innerText = `Pressure: ${Math.round(response.main.pressure)} hpa`;

        const Humidity = document.querySelector(".humidity");
        Humidity.innerText = `Humidity: ${Math.round(response.main.humidity)} %`;

        const FeelsLike = document.querySelector(".pressure");
        FeelsLike.innerText = `Feels Like: ${Math.round(response.main.feels_like)} C `;

    }
}

function dateFunct(dates) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[dates.getDay()];
    let date = dates.getDate();
    let month = months[dates.getMonth()];
    let year = dates.getFullYear();

    return `${year}, ${month} ${date}, ${day}`;
}