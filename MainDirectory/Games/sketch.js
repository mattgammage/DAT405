//http://api.openweathermap.org- origin of information

//Text to assign the city I would like to know the weather of
let getLocation1 = "Alaska";
let getLocation2 = "New York";
let getLocation3 = "Plymouth";
//The API key has to be given by the openweathermap.org website
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
  console.log("Location: " + getLocation1) //Shows the location I am searching
  console.log("Temperature: " + weather1.main.temp + "°C"); //Show location's conditions (temperature)
  console.log("Temperature (min): " + weather1.main.temp_min + "°C"); //Minimum temperature
  console.log("Temperature (max): " + weather1.main.temp_max + "°C"); //Maximum temperature
  console.log("Humidity: " + weather1.main.humidity); //Humidity
  console.log("Pressure: " + weather1.main.pressure); //Pressure
  console.log("Wind Speed:" + weather1.wind.speed); //Wind Speed


  createCanvas(900, 900); //Canvas size
  background(160); // Overall colour of background
  textAlign(CENTER); //Position of text
  textSize(30); //Size of text

}

function draw(){
  size1 = map(weather1.main.temp, -5, 40, 10, 100); //Determines the values between amounts
  fill(0, 0, map(weather1.main.temp,0, 20,0, 255)); //Colour of the overall shape, depends on information from website
  rect(0,0,width,height/3) //Size of shape, in this case it covers one third of the canvas
  fill(255); //Colour of text
  text("Current Temperature in Alaska is " + weather1.main.temp + "°C", width/2, height/5); //Position of text while still being centred

  size2 = map(weather2.main.humidity, -5, 40, 10, 100);
  fill(map(weather2.main.humidity,0, 20,0, 255), 0, 0);
  rect(0,320,width,height/3)
  fill(255);
  text("Current Humidity in New York is " + weather2.main.humidity + "%", width/2, height/2);

  size3 = map(weather3.wind.speed, 0, 20, 10, 100);
  fill(0, map(weather3.wind.speed,0, 20,0, 255), 0);
  rect(0,640,width,height/3)
  fill(255);

  text("Current Wind Speed in Plymouth is " + weather3.wind.speed + "m/s", width/2, height/1.15);
}
