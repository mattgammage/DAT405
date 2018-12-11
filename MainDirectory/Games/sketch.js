//http://api.openweathermap.org

//Use a text/string object to assign the city we would like to know the weather of
let getLocation1 = "Edinburgh";
let getLocation2 = "New York";
let getLocation3 = "Plymouth";
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "a93316466bc4b03baa847ec7b9006eb7";
//This variable will store the JSON weather data
let weather1;
let weather2;
let weather3;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url1 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation1+"&units=metric&appid="+apiKey;
  let url2 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation2+"&units=metric&appid="+apiKey;
  let url3 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation3+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather1 = loadJSON(url1);
  weather2 = loadJSON(url2);
  weather3 = loadJSON(url3);
}

function setup() {
  console.log(weather1); //Return all JSON data
  console.log("Location: " + getLocation1) //Show the location we are searching
  console.log("Temperature: " + weather1.main.temp + "°C"); //Show location's conditions (temperature)
  console.log("Temperature (min): " + weather1.main.temp_min + "°C"); //Minimum temperature
  console.log("Temperature (max): " + weather1.main.temp_max + "°C"); //Maximum temperature
  console.log("Humidity: " + weather1.main.humidity); //Humidity
  console.log("Pressure: " + weather1.main.pressure); //Pressure
  console.log("Wind Speed:" + weather1.wind.speed);

  //Display temperature information on the screen
  createCanvas(900, 900);
  background(160);
  textAlign(CENTER);
  textSize(30);
  text("Current Temperature in Edinburgh is " + weather1.main.temp + "°C", width/2, height/4);
  text("Current Humidity in New York is " + weather2.main.humidity + "°C", width/2, height/2.7);
  text("Current Wind Speed in Plymouth is " + weather3.wind.speed + "°C", width/2, height/2);
  noLoop();
}

function draw(){
}
