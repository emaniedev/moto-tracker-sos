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
        mapboxgl.accessToken = process.env.MAPBOX_API_TOKEN;
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