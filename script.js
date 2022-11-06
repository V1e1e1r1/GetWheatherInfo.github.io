let weather = {
    apiKey:"4cfbbdb6ef411242d3cd463f05a3ca79",
    fetchWeather:function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid=" 
        + this.apiKey
        )
        .then((response)=>response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data){
      const {name} = data;
      const {icon,decription} = data.weather;
      const {temp,humidity} = data.main;
      const {speed} = data.wind;
      document.querySelector("city").innerText = "weather in"+name;
      document.querySelector(".icon").src = " http://openweathermap.org/img/wn/"+ icon +".png";
      document.querySelector("description").innerText = description;
      document.querySelector(".temp").innerText = temp + "&#176;C";
      document.querySelector(".humidity").innerText = "Humidity:" + humidity +"%";
      document.querySelector(".wind").innerText = "wind speed:"  + speed + "km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"

    },
    search: function (){
       this.fetchWeather( document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function (){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function (event){
  if(event.key == "Enter"){
    weather.search();
  }
});
weather.fetchWeather("Denver");