const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c500b1367msha7cef36886a5e77p1542aejsn94345fc399c9',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

async function fetchWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		document.getElementById('forecast').innerText = result;
	} catch (error) {
		console.error('Error fetching weather data:', error);
		document.getElementById('forecast').innerText = 'Error fetching weather data.';
	}
}

// Llamamos a la función para obtener y mostrar el clima
fetchWeather();