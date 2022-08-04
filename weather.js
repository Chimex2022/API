const key = 'yjVpVaN0riJgeSTLjm8OAgsFApprcAhV';


const getWeather =async (id) => {
const base ='http://dataservice.accuweather.com/currentconditions/v1/';
const query = `${id}?apikey=${key}`;
const response =await fetch(base + query);
const data =await response.json();

return data;
}

const getCity = async (city) =>{

const base ='http://dataservice.accuweather.com/locations/v1/cities/search';
const query =`?apikey=${key}&q=${city}`;
const response =await fetch(base + query);
const data =await response.json();

return data;
};

getCity('LAGOS')
.then(data =>console.log(data))
.catch(err =>console.log(err));

getWeather()