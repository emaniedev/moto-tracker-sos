import React from 'react';
import mapboxgl from 'mapbox-gl';

class Mapboxmap extends React.Component{
    constructor(inicializar){
        super();
        this.state = {
            init: inicializar
        };
    }
    init (){
        mapboxgl.accessToken = 'pk.eyJ1IjoiZW1hbmllZ2EiLCJhIjoiY2tjejcwaHoyMGd3ZDJ0b3V2eGxka2szeiJ9.n9FOB-J67uZMTnXtYHZVFA';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
        map.on('load',(e) => {
            console.log("Se ha cargado el mapa")
        })

    }
    render(){
        return(
            <div id='map' styles='width: 400px; height: 300px;'></div>
        );
    }
    componentDidMount(){
        this.init();
        
    }
}

export default Mapboxmap;