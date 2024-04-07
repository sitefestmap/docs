---
title: Route Markers Data
---

Title Markers for the 5 main routes, using coordinates and colors.

```javascript
const john_st = [-2.22, 51.745];
const vale = [-2.268437, 51.768535];
const bisley = [-2.16, 51.755];
const slad = [-2.198, 51.772];
const golden_valley = [-2.185, 51.728];
const nailsworth = [-2.25, 51.726];

const dark_red = '#f84d4d';
const dark_blue = '#40546a';
const dark_orange = '#f79640';
const dark_purple = '#7753eb'; 
const dark_green = '#207a4b';
const dark_mid_blue = '#4264fb'

const routes = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": john_st
            },
            "properties": {
                "title": "Stroud",
                "icon" : "",
                "color": dark_red
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": vale
            },
            "properties": {
                "title": "Valley and Vale",
                "icon" : "",
                "color": dark_blue
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": bisley
            },
            "properties": {
                "title": "Bisley",
                "icon" : "",
                "color": dark_purple
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": slad
            },
            "properties": {
                "title": "Slad Valley",
                "icon" : "",
                "color": dark_orange
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": golden_valley
            },
            "properties": {
                "title": "Golden Valley",
                "icon" : "",
                "color": dark_green
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": nailsworth
            },
            "properties": {
                "title": "Nailsworth Valley",
                "icon" : "",
                "color": dark_mid_blue
            }
        }
    ]
}

export default routes;
```