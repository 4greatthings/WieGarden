// import 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'

window.onload = () => {

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    const accessToken = "sk.eyJ1IjoiNGdyZWF0dGhpbmdzIiwiYSI6ImNqd2NtdDJ3djAyeHU0YW9heHFuZ3dydDMifQ.1Hdp7GL8uPJ_6s6v9Yj5Gg";

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: accessToken
    }).addTo(mymap);


    var marker = L.marker([51.5, -0.09]).addTo(mymap);


    // var circle = L.circle([51.508, -0.11], {
    //     color: 'green',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 50
    // }).addTo(mymap);



    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);


    // var myIcon = L.icon({
    //     iconUrl: 'my-icon.png',
    //     iconSize: [ wide , wide],
    //     iconAnchor: [65, 65],
    // popupAnchor: [-3, -76]

    // });

let seeds= [];

// function dropSeed(e) { ... }
// mymap.on('click', dropSeed);

function dropSeed(e) {

    let spot = e.getMousePosition('click', mymap);
    let mult = mymap.getZoom();
    let wide = 2 * mult;
    let centr = mult;
    let seedy = L.marker([spot.x, spot.y], {
        icon:
            L.icon({
                iconUrl: 'my-icon.png',
                iconSize: [wide, ],
                iconAnchor: [centr, centr],
                shadowUrl: 'my-icon-shadow.png',
                shadowSize: [wide+2, ],
                shadowAnchor: [centr, centr-1]
            })
    }).addTo(mymap);

    console.log(seedy);
    seeds.push(seedy); 
}

mymap.on('click', dropSeed); 


    mymap.on('zoomend', function () {
        var cZoom = mymap.getZoom();
        console.log(cZoom);
        if (cZoom >= 3) {
            let mult = mymap.getZoom();
            let wide = 2 * mult;
            let centr = mult;
            seedy.setIcon(L.icon({
                iconUrl: 'my-icon.png',
                iconSize: [wide, ],
                iconAnchor: [centr, centr],
                shadowUrl: 'my-icon-shadow.png',
                shadowSize: [wide+2, ],
                shadowAnchor: [centr, centr-1]
            })
            )
        }
        else {
            wide = cZoom;
        }
    });


}

// export default mymap
