---
title: Polygon
---

Abandoned polygon shape, but might be useful for referencing how to make shapes if needed.

```js title="polygon.js"
const left = '-2.325';
const top_intersection = '-2.2477';
const right = '-2.10000';
const top = '51.7900';
const bottom = '51.6875';
const bottom_intersection = '-2.206785';
const left_intersection = '51.727967';
const right_intersection = '51.733189'

const center_bottom = [-2.217850418218603, 51.74107023834362];
const center_bottom_left = [-2.223084174810481, 51.745370277385945];
const center_top_left = [-2.220203207878683, 51.74711993736873];
const center_top_right = [-2.214924597164244, 51.74534944307196];
const center_bottom_right = [-2.214825402940761, 51.74251835473324];

const outside_bottom = [bottom_intersection, bottom];
const outside_bottom_left = [left, left_intersection];
const outside_bottom_right = [right, right_intersection];
const outside_top_left = [top_intersection, top];

const top_left_corner = [left, top]; // new 
const left_bottom_corner =  [left, bottom]; // left
const right_bottom_corner = [right, bottom];

// const outside_top_right = [-2.12014, 51.784184]; // old
const outside_top_right = [right, top];

const red = '#f84d4d'
const mid_blue = '#4264fb'
const blue = '#40546a' 
const orange = '#f79640'
const purple = '#7753eb'
const green = '#207a4b'

const multi_polygon = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { color: red },
            geometry: {
                type: 'Polygon',
                coordinates: [ // 1 Town Center
                    [
                        center_bottom,
                        center_bottom_left,
                        center_top_left,
                        center_top_right,
                        center_bottom_right,
                        center_bottom,
                    ]
                ]
            }
        },
        {   // 2 Nailsworth
            type: 'Feature',
            properties: { color: mid_blue },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_bottom,
                        center_bottom_left,
                        outside_bottom_left,
                        left_bottom_corner,
                        outside_bottom,
                        center_bottom
                    ]
                ]
            }
        },
        {  // 3 Vale
            type: 'Feature',
            properties: { color: blue },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_left,
                        center_bottom_left,
                        outside_bottom_left,
                        top_left_corner, // new
                        outside_top_left,
                        center_top_left
                    ]
                ]
            }
        },
        {
            // 4 Slad
            type: 'Feature',
            properties: { color: orange },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_left,
                        outside_top_left,
                        outside_top_right,
                        center_top_right,
                        center_top_left,
                    ]
                ]
            }
        },
        {
            // 5 Bisley
            type: 'Feature',
            properties: { color: purple },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_top_right,
                        outside_top_right,
                        outside_bottom_right,
                        center_bottom_right,
                        center_top_right
                    ]
                ]
            }
        },
        {
            // 6 Golden Valley
            type: 'Feature',
            properties: { color: green },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        center_bottom_right,
                        center_bottom,
                        outside_bottom,
                        right_bottom_corner,
                        outside_bottom_right,
                        center_bottom_right
                    ]
                ]
            }
        }
    ]
};

export default multi_polygon;
```