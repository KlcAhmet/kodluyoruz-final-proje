

# About The Project
**Covid19 React Project**

 -  [View Demo on Github](https://klcahmet.github.io/kodluyoruz-final-proje/))
  

## Overview
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/kodluyoruz-final-proje/master/screenshot/Screenshot_2.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/kodluyoruz-final-proje/master/screenshot/Screenshot_4.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/kodluyoruz-final-proje/master/screenshot/Screenshot_5.png)
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/kodluyoruz-final-proje/master/screenshot/klcahmet.github.io-iPhone-XR-XS-Max-414x896.png)


## Get Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
npm install -g json-server // Test Server
	json-server --watch db.json --port 3004
npm install axios
npm install --save react-router-dom
npm install --save bootstrap
npm install jquery
```

## Database

 - Standart route data
	 - /src/componentmap/dataBaseMap.js
	 - https://www.npoint.io
 - Live Covid-19 Data
	 - https://rapidapi.com/Gramzivi/api/covid-19-data/endpoints
```
axios.get(`${maplink}/countries`).then(function (data) {
data.data.forEach((element, i) => {
setTimeout(() => {
axios.request(element).then(function (response) {
document.getElementById("stats").children[i].children[2].children[0].textContent = response.data[0].confirmed}).catch(function (error) {
console.error(error);
});}, i * 2000);});})
```
I'm used delay for rapidapi.com freemium version

## Components

 - Pages
	 - Header.js		// header
		 - Logo.js                   //using for website logo
		 - HeaderLinks.js	// using for get navlink element
		 - ContactButton.js	// using for contact (bootstrap modal)
		 - darkmode.js	//using for dark mode
		 - 
	 - Overview.js
		 - Title.js // using for mostly title 
		 - Subtitle.js	//using for mostly subtitle 
		 - Description.js	//using for mostly paragraph < p > element
		 - CommonButton.js //using for mostly common button
		 - Overviewmage.js //using for mostly image < img > element
	 - Symptoms.js
	 - Prevention.js
	 - Statistics.js
		 - Connecting https://rapidapi.com/Gramzivi/api/covid-19-data/endpoints for countries live covid report. Rate Limit 1 requests per second. 
	 - Footer.js // footer
		  - Logo.js                   
		 - HeaderLinks.js
		 - FooterLogo.js
