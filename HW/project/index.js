const container = document.getElementById("container");
const weather = document.getElementById("weather");


async function getIp() {
  try {
    const resp = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const obj = await resp.json();
    const {city, latitude, longitude} = obj;

    const resp1 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const obj2 = await resp1.json();
    const {current_weather} = obj2;
    const {temperature, windspeed, weathercode} = current_weather;
    switch (weathercode) {
      case 0:
      case 1:
        weather.innerHTML = `<img src="./icons8-солнце-24.png" alt="Clear sky" srcset="">`;
        break;
      case 2:
        weather.innerHTML = `<img src="./icons8-частичная-облачность-24.png" alt="partly cloudy" srcset="">`;
        break;
      case 3:
        weather.innerHTML = `<img src="./icons8-облака-24.png" alt="overcast" srcset="">`;
        break;
      case 61:
        weather.innerHTML = `<img src="./icons8-легкий-дождь-2-24.png" alt="Rain Slight" srcset="">`;
        break;
      case 63:
      case 65:
        weather.innerHTML = `<img src="./icons8-дождь-24.png" alt="Rain" srcset="">`;
        break;
      case 71:
        weather.innerHTML = `<img src="./icons8-небольшой-снег-24.png" alt="Snow fall Slight" srcset="">`;
        break;
      case 73:
      case 75:
          weather.innerHTML = `<img src="./icons8-снег-24.png" alt="Snow fall" srcset="">`;
        break;
      case 95:
        weather.innerHTML = `<img src="./icons8-буря-24.png" alt="Thunderstorm: Slight or moderate" srcset="">`;
      break;
      case 96:
      case 99:
        weather.innerHTML = `<img src="./icons8-град-24.png" alt="Thunderstorm with slight and heavy hail" srcset="">`;
      break;
    }

    const el = `        
    <h2 class="heading">${city}</h2>
    <p class="desc">Temperature: ${temperature} °C</p>
    <p class="desc">Wind speed: ${windspeed} km/h</p>`;
    
    container.insertAdjacentHTML('beforeend', el);


  } catch(err){
    console.log("Error 404");
    
  }
}
getIp();


















































