const API_KEYS = `f165fc1e7e12d9acc14ca4ca33c2693c`

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value ;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;

    fetch(url)
     .then (res => res.json())
     .then (data =>  displayTemperature(data));
}
const setInnerText = (id,text)=>{
  document.getElementById(id).innerText=text;
}

const displayTemperature = temperature =>{
console.log(temperature);
setInnerText('city',temperature.name);
setInnerText("temperature",temperature.main.temp);
setInnerText('condition',temperature.weather[0].main);

//set-weather-icon
const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
const icon=document.getElementById('icon');
icon.setAttribute('src',url);
}