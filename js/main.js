
console.log(axios);

const counTry = document.querySelector('.input--country');
const searchBtn = document.querySelector('.search-input button');
const counTryName = document.querySelector('.input--label > span');
const errorMessage = document.querySelector('.error--message');

searchBtn.addEventListener("click", () => {
  counTryName.innerText = counTry.value;

  const cityName = counTryName.innerText;

  axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=72b679ddb227219023234c815867edb3`,

  })
    .then(function (response) {

      errorMessage.style.display = "none";
      console.log(response);
      const name = response.data.name;
      const coutryTemp = ((response.data.main.temp - 273.15).toFixed(1));
      const maxTemp = ((response.data.main.temp_max - 273.15).toFixed(1));
      const minTemp = ((response.data.main.temp_min - 273.15).toFixed(1));
      const weatherDesc = response.data.weather[0].description;


      const table_weatherCity = document.querySelector('.weather--city');
      const table_weatherCurrTemp = document.querySelector('.weather--currtemp');
      const table_weatherMaxTemp = document.querySelector('.weather--maxtemp');
      const table_weatherMinTemp = document.querySelector('.weather--mintemp');
      const table_weatherdesc = document.querySelector('.weather--desc');


      table_weatherCity.innerText = name;
      table_weatherCurrTemp.innerText = coutryTemp;
      table_weatherMaxTemp.innerText = maxTemp;
      table_weatherMinTemp.innerText = minTemp;
      table_weatherdesc.innerText = weatherDesc;
    })
    .catch(function (error) {

      errorMessage.style.display = " block";

    });

});






