---
title: Studio Markers Data
---

*TODO: Docs*

```javascript
import * as waypoints from './waypoints';

// Marker colors
const red       = '#f84d4d';
const mid_blue  = '#4264fb';
const dark_blue = '#40546a';
const orange    = '#f79640';
const purple    = '#7753eb';
const green     = '#207a4b';

// make one file with imports
import cacao_circle from './popup-info/cacao-circle';
import john_st_studios from './popup-info/john-st-studios';
import high_st from './popup-info/high-st';
import weven from './popup-info/weven';
import studio_3 from './popup-info/studio-3';
import bath_road from './popup-info/bath-road';
import morven_st_chloe from './popup-info/morven-st-chloe';
import frogmarsh_mill from './popup-info/frogmarsh-mill';
import the_hide from './popup-info/the-hide';
import article_studio from './popup-info/article-studio';
import the_nutshell_studios from './popup-info/the-nutshell-studios';
import three_storeys from './popup-info/three-storeys';
import walled_garden from './popup-info/museum-in-the-park';
import studio_tuft from './popup-info/studio-tuft';
import houseworkwork from './popup-info/houseworkwork';
import landsdown_hall from './popup-info/landsdown-hall';
import jack_duplock from './popup-info/jack_duplock';
import stroud_pottery from './popup-info/stroud-pottery';
import may_derbyshire from './popup-info/may-derbyshire';
import mark_derbyshire from './popup-info/mark-derbyshire';
import lucy_inder from './popup-info/lucy-inder';
import sam_marsh from './popup-info/sam-marsh';
import andy_bradley from './popup-info/andy-bradley';
import hawkwood from './popup-info/hawkwood';
import the_camp from './popup-info/the-camp';
import melvyn_warren_smith from './popup-info/melvyn-warren-smith';
import kath_williams from './popup-info/kath-williams';
import piccadilly_mill_east from './popup-info/piccadilly-mill-east';
import piccadilly_mill_west from './popup-info/piccadilly-mill-west';
import lower_st from './popup-info/lower-st';
import nigel_noyes from './popup-info/nigel-noyes';
import clare_bonnet from './popup-info/clare-bonnet';
import caroline_jamfrey from './popup-info/caroline-jamfrey';
import robert_garland from './popup-info/robert-garland';

import trixter_house from './popup-info/trixter-house.js';
import griffin_mill from './popup-info/griffin-mill';
import polly_lyster from './popup-info/polly-lyster';
import victoria_works from './popup-info/victoria-works';
import sarah_maingot from './popup-info/sarah-maingot';

// Note : Each input now has id="checkbox", as only one of them appears in the DOM at a time

const studio_markers = [
    // Route 1 Town Centre (Red)
    {
        studio: john_st_studios,
        color: red,
        lngLat: waypoints.john_st
    },
    {
        studio: weven,
        color: red,
        lngLat: waypoints.weven
    },
    {
        studio: cacao_circle,
        color: red,
        lngLat: waypoints.cacao_circle
    },
    {
        studio: high_st,
        color: red,
        lngLat: waypoints.high_st
    },
    // Route 2 Nailsworth (Mid blue)
    {
        studio: bath_road,
        color: mid_blue,
        lngLat: waypoints.bath_rd
    },
    {
        studio: morven_st_chloe,
        color: mid_blue,
        lngLat: waypoints.morven_st_chloe
    },
    {
        studio: frogmarsh_mill,
        color: mid_blue,
        lngLat: waypoints.frogmarsh_mill
    },
    {
        studio: article_studio,
        color: mid_blue,
        lngLat: waypoints.article_studio
    },
    {
        studio: the_hide,
        color: mid_blue,
        lngLat: waypoints.the_hide
    },
    {
        studio: the_nutshell_studios,
        color: mid_blue,
        lngLat: waypoints.nutshell_studios
    },
    {
        studio: three_storeys,
        color: mid_blue,
        lngLat: waypoints.three_storeys
    },
    // Route 3 VALE (BLUE)
    {
        studio: walled_garden,
        color: dark_blue,
        lngLat: waypoints.walled_garden
    },
    {
        studio: studio_tuft,
        color: dark_blue,
        lngLat: waypoints.studio_tuft
    },
    // Route 4
    {
        studio: houseworkwork,
        color: orange,
        lngLat: waypoints.houseworkwork
    },
    {
        studio: landsdown_hall,
        color: orange,
        lngLat: waypoints.landsdown_hall
    },
    {
        studio: jack_duplock,
        color: orange,
        lngLat: waypoints.jack_duplock
    },
    {
        studio: stroud_pottery,
        color: orange,
        lngLat: waypoints.stroud_pottery
    },
    {   
        studio: may_derbyshire,
        color: orange,
        lngLat: waypoints.may_derbyshire
    },
    {   // combine into 1?
        studio: mark_derbyshire,
        color: orange,
        lngLat: waypoints.mark_derbyshire
    },
    {
        studio: lucy_inder,
        color: orange,
        lngLat: waypoints.lucy_inder
    },
    {
        studio: sam_marsh,
        color: orange,
        lngLat: waypoints.sam_marsh
    },
    {
        studio: andy_bradley,
        color: orange,
        lngLat: waypoints.andy_bradley
    },
    {
        studio: hawkwood,
        color: orange,
        lngLat: waypoints.hawkwood
    },
    {
        studio: the_camp,
        color: orange,
        lngLat: waypoints.the_camp
    },
    // Route 5
    {
        studio: studio_3,
        color: purple,
        lngLat: waypoints.studio_3
    },
    {
        studio: melvyn_warren_smith,
        color: purple,
        lngLat: waypoints.melvyn_warren_smith
    },
    {
        studio: kath_williams,
        color: purple,
        lngLat: waypoints.kath_williams
    },
    {
        studio: piccadilly_mill_east,
        color: purple,
        lngLat: waypoints.piccadilly_mill_east
    },
    {
        studio: piccadilly_mill_west,
        color: purple,
        lngLat: waypoints.piccadilly_mill_west
    },
    {
        studio: lower_st,
        color: purple,
        lngLat: waypoints.lower_st
    },
    {
        studio: nigel_noyes,
        color: purple,
        lngLat: waypoints.nigel_noyes
    },
    {
        studio: clare_bonnet,
        color: purple,
        lngLat: waypoints.clare_bonnet
    },
    {
        studio: caroline_jamfrey,
        color: purple,
        lngLat: waypoints.caroline_jamfrey
    },
    /*{
        studio: `<h2>Horns Rd</h2>
        <p>...more info</p>`,
        color: purple,
        lngLat: waypoints.horns_rd
    }, */

    {
        studio: robert_garland,
        color: purple,
        lngLat: waypoints.robert_garland
    },
    // Route 6 Golden Valley (Green)
    {
        studio: trixter_house,
        color: green,
        lngLat: waypoints.trickster_house
    },
  /*  {
        studio: `<h2>London Road</h2>
        <p>...more info</p>`,
        color: green,
        lngLat: waypoints.london_rd
    },
    */
    {
        studio: griffin_mill,
        color: green,
        lngLat: waypoints.griffin_mill
    },
    {
        studio: polly_lyster,
        color: green,
        lngLat: waypoints.polly_lyster
    },
    {
        studio: victoria_works, // London Road
        color: green,
        lngLat: waypoints.victoria_works
    },
    {
        studio: sarah_maingot, // London Road
        color: green,
        lngLat: waypoints.sarah_maingot
    },
]

export default studio_markers;
```