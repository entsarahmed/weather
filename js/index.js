let cityName= document.getElementById('cityName');
let tempWeather=document.getElementById('temp1');
let conditionWeather=document.getElementById('conditionWeather');
let iconCurrent=document.querySelector('.iconCurrent')

let iconOne=document.querySelector('.icon1');
let maxTempOne=document.getElementById('maxtemp1');
let minTempOne=document.getElementById('mintemp1');
let conditionWeatherOne=document.getElementById('conditionWeather1');



let iconTwo=document.querySelector('.icon2');
let maxTempTwo=document.getElementById('maxtemp2');
let minTempTwo=document.getElementById('mintemp2');
let conditionWeatherTwo=document.getElementById('conditionWeather2');


let iconThree=document.querySelector('.icon3');
let maxTempThree=document.getElementById('maxtemp3');
let minTempThree=document.getElementById('mintemp3');
let conditionWeatherThree=document.getElementById('conditionWeather3');


let iconFour=document.querySelector('.icon4');
let maxTempFour=document.getElementById('maxtemp4');
let minTempFour=document.getElementById('mintemp4');
let conditionWeatherFour=document.getElementById('conditionWeather4');


let iconFive=document.querySelector('.icon5');
let maxTempFive=document.getElementById('maxtemp5');
let minTempFive=document.getElementById('mintemp5');
let conditionWeatherFive=document.getElementById('conditionWeather5');

let month=document.getElementById('month');

let target= 'cairo';

checkCity=""
 let listArr=[];
async function getWeather(targetLocation){
 let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=083f529b011d4dd787c104730241101&q=${targetLocation}&days=7`);
let finalResponse= await response.json()
//!....current weather............
listArr=finalResponse;
console.log(listArr);
getData();

checkCity=targetLocation;
console.log(checkCity);
}
getWeather(target);



function getData(){
  
  let monthCurrent=new Date()
  month.textContent=monthCurrent.toDateString();
let locationName=listArr.location.name;
cityName.innerHTML=locationName;
let  currentTemp=listArr.current.temp_c;
tempWeather.innerHTML=currentTemp;
let condition=listArr.current.condition.text;
conditionWeather.innerHTML=condition;
let icon= listArr.current.condition.icon;
iconCurrent.setAttribute('src',`http:${icon}`);

let icon1=listArr.forecast.forecastday[1].day.condition.icon;
iconOne.setAttribute('src',`http:${icon1}`);
let maxTemp1=listArr.forecast.forecastday[1].day.maxtemp_c;
maxTempOne.innerHTML=maxTemp1;
let minTemp1=listArr.forecast.forecastday[1].day.mintemp_c;
minTempOne.innerHTML=minTemp1;
let condition1=listArr.forecast.forecastday[1].day.condition.text;
conditionWeatherOne.innerHTML=condition1;


let icon2=listArr.forecast.forecastday[2].day.condition.icon;
iconTwo.setAttribute('src',`http:${icon2}`);
let maxTemp2=listArr.forecast.forecastday[2].day.maxtemp_c;
maxTempTwo.innerHTML=maxTemp2;
let minTemp2=listArr.forecast.forecastday[2].day.mintemp_c;
minTempTwo.innerHTML=minTemp2;
let condition2=listArr.forecast.forecastday[2].day.condition.text;
conditionWeatherTwo.innerHTML=condition2;


let icon3=listArr.forecast.forecastday[3].day.condition.icon;
iconThree.setAttribute('src',`http:${icon3}`);
let maxTemp3=listArr.forecast.forecastday[3].day.maxtemp_c;
maxTempThree.innerHTML=maxTemp3;
let minTemp3=listArr.forecast.forecastday[3].day.mintemp_c;
minTempThree.innerHTML=minTemp3;
let condition3=listArr.forecast.forecastday[3].day.condition.text;
conditionWeatherThree.innerHTML=condition3;




let icon4=listArr.forecast.forecastday[4].day.condition.icon;
iconFour.setAttribute('src',`http:${icon4}`);
let maxTemp4=listArr.forecast.forecastday[4].day.maxtemp_c;
maxTempFour.innerHTML=maxTemp4;
let minTemp4=listArr.forecast.forecastday[4].day.mintemp_c;
minTempFour.innerHTML=minTemp4;
let condition4=listArr.forecast.forecastday[4].day.condition.text;
conditionWeatherFour.innerHTML=condition4;




let icon5=listArr.forecast.forecastday[5].day.condition.icon;
iconFive.setAttribute('src',`http:${icon5}`);
let maxTemp5=listArr.forecast.forecastday[5].day.maxtemp_c;
maxTempFive.innerHTML=maxTemp5;
let minTemp5=listArr.forecast.forecastday[5].day.mintemp_c;
minTempFive.innerHTML=minTemp5;
let condition5=listArr.forecast.forecastday[5].day.condition.text;
conditionWeatherFive.innerHTML=condition5;

}
const d = new Date();
console.log(d);
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
function checkDay(day){
if(day + d.getDay()>6){
  return day + d.getDay()-7;
}
else{
  return day + d.getDay();
}
}

for (i=0;i<6;i++){
  document.getElementById("day" + (i+1)).innerHTML=weekday[checkDay(i)];
}



let cityInput=document.getElementById('cityInput');
let find=document.getElementById('find');


find.addEventListener('click',()=>{
  getWeather(cityInput.value)
})



cityInput.addEventListener('input',function(e){
var cityNew=e.target.value;
getWeather(cityNew);
})