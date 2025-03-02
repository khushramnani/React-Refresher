export const fetchApi = async (city)=>{

    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

    // rapid api 
//  const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'd79538a727msh2662a00ccb3374fp1bf45fjsnd05b97d5fde6',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}

    
// };

const SecondApiKey = "790d8ab7880e4882866115751250103" 
const BaseUrl = `https://api.weatherapi.com/v1/current.json?key=${SecondApiKey}&q=${city}&aqi=yes`
try {
	//  const response = await fetch(url, options);
    const response = await fetch(BaseUrl)
	const result = await response.json();
	console.log(result);
    return result
} catch (error) {
	console.error(error);
}



}

export default fetchApi