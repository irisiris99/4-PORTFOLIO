const weather = document.querySelector("#first");
const city = document.querySelector("#two");
const API_KEY = "e79b73c4dd37b1db68ac0f4e1314c577";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
	.then(Response => Response.json()
	.then(data => {
		city.innerText = data.name;
		weather.innerText = data.weather[0].main +" /";
	}));
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
