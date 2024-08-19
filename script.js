const apikey ="548192ee40744454b65f8beb50af602e";
const apiurl ="https://api.weatherbit.io/v2.0/current?&include=hourly&city=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl+city+`&key=${apikey}`);
if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
 else{
     var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.data[0].city_name;
    document.querySelector(".temp").innerHTML = Math.round(data.data[0].temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.data[0].rh + "%";
    document.querySelector(".wind").innerHTML = data.data[0].wind_spd + " km/h";

document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
   if(data.data[0].weather.description== 'Clear sky'){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.data[0].weather.description=='Scattered clouds'){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.data[0].weather.description=='rain'){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.data[0].weather.description=='snow'){
        weatherIcon.src ="images/snow.png";
    }
    else if(data.data[0].weather.description=='Broken clouds'){
        weatherIcon.src ="images/mist.png";
    }
    else if(data.data[0].weather.description=="Drizzile"){
        weatherIcon.src ="images/drizzile.png";
    }
    
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();


