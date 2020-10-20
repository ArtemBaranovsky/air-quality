import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
import './AirQuality.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0YmFyMTk4MCIsImEiOiJja2dka2xmYXMwOGhyMnFzNHRnczcyZ2NlIn0.WEst8CwfSY2nA--hhOUEiw';
// const map = new mapboxgl.Map({
// 	container: 'map',
// 	style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
// 	center: [-74.5, 40], // starting position [lng, lat]
// 	zoom: 9 // starting zoom
// });

const AirQuality = () => {
	const mapContainer = useRef(null);
	const [locationInfo, setLocationInfo] = useState({
		lng: 31,
		lat: 48.5,
		zoom: 5
	});

	useEffect(() => {	// обернули внутри функцию componentDidMount()
		console.log(mapContainer);
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
		}, []); // пустой список зависимостей чтобы не происходило постояннного перерендеривания
	});


	return (
		<section className={'air-q container'}>
			<h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
			<div className="air-q-map" ref={mapContainer} />
			<p className="air-q-text">
				Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.
			</p>
		</section>
	);
};

export default AirQuality;