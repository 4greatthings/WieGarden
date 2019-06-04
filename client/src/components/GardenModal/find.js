// import mymap from "./filter";





// example
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: true
}
);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ]
}).addTo(map);

// direction
new L.Routing.OSRMv1(options)


export default map;