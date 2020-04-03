const mymap = L.map('mapid').setView([38.9869, -76.9426], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXJpY25ndXllbjk4IiwiYSI6ImNrOGdodmlzbDAxdGozaW85OTVsN2VmMngifQ.U_gmqOqUXoGHkTu9wuEpBQ'
}).addTo(mymap);

const marker = L.marker([38.988251, -76.941577]).addTo(mymap);
marker.bindPopup("Hornbake Library").openPopup();

const foodIns = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

let longLat = []
let name = []

fetch(foodIns).then(
    function(response){
        return response.json();
    }
).then(function(jsonData){
    for(let i = 0; i <3; i++){
        longLat[i]=(jsonData[i+3].geocoded_column_1.coordinates.reverse())
        name[i]=jsonData[i+3].name
       
    }
    for(let j = 0;j<3;j++){
        const mark = L.marker(longLat[j]).addTo(mymap);
        mark.bindPopup(name[j])
    }
});