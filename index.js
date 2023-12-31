let weather={
    apiKey:"7d58cec805b816d14ed29454cce67d34",
    fetchWeather :function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid="
            + this.apiKey


        ) 
          .then((response)=>response.json())
          .then((data)=> this.displayWeather(data));

    },
    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML= "weather in "  + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temperature").innerHTML =  temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity:" + humidity + "%";
        document.querySelector(".wind-speed").innerHTML =" wind-speed:" + speed + "km/hr";


    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

}

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keypress",function(event){
    if(event.key === "enter"){
        weather.search;
    }

})
