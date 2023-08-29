function updateDate() {


  let today = new Date();
  let dayNum = today.getDate();
  let dayName = today.getDay();
  let month = today.getMonth();
  let year = today.getFullYear();


  let d = document.getElementById('day');
  let dn = document.getElementById('daynum');
  let m = document.getElementById('month');
  let y = document.getElementById('year');

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  d.innerHTML = dayWeek[dayName];
  dn.innerText = dayNum;
  m.innerHTML = months[month];
  y.innerHTML = year;
}
updateDate();


const apiKey = "e4e4fd5ef2d24dd3ff24079fc1005c3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search i');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + '&appid=' + apiKey);
  let data = await response.json();


  //fetching data from API
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";



}



function handleSearch() {
  checkWeather(searchBox.value);
}

searchBtn.addEventListener("click", handleSearch) || searchBox.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission (if any)
    handleSearch();
  }
});