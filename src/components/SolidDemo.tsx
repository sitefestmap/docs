import { createSignal } from 'solid-js';
import MapGL, {
  Source,
  Layer,
  Camera,
  Atmosphere,
} from 'solid-map-gl';

import type { Viewport } from 'solid-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export function SolidDemo() {
    
    const [viewport, setViewport] = createSignal({
        center: [140, -10],
        zoom: 2,
      } as Viewport);
    const [rotation, setRotation] = createSignal(true);
    
    return(
    <div style="height:100vh;position:absolute;width:100%;"> 
        <div id="map" style="position: absolute; top: 0; bottom: 0; width: 80%;">
        <MapGL
            options={{ style: 'mb:outdoor', projection: 'globe', accessToken: 'pk.eyJ1IjoibWF0dGhpYXN3ZXN0b24iLCJhIjoiY2xlNHIya255MDJqaTNwbXY5NjUzdWgzYSJ9.af8OJ3gOuIiOvKkYllihGQ', }}
            viewport={viewport()}
            onViewportChange={(evt: Viewport) => setViewport(evt)}
            onUserInteraction={() => null}
            
        >
         
            <Camera rotateGlobe={rotation()} />
            <Atmosphere />
            <Source
            source={{
                type: 'geojson',
                data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
            }}
            >
                <Layer
                    // Using simplified styles
                    style={{
                        type: 'circle',
                        radius: ['*', ['get', 'mag'], 2],
                        color: ['match', ['get', 'tsunami'], 0, '#F00', 1, '#03A', '#CCC'],
                        opacity: 0.5,
                        strokeWidth: 0.25,
                        pitchAlignment: 'map',
                    }}
                    beforeType="symbol"
                />
            </Source>
        </MapGL>
        </div>
        </div>
    )
};


