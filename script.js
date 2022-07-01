mapboxgl.accessToken = '';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-117.141212, 32.722335],
    zoom: 12.5
})

navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {
     enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {}


function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, 
        zoom: 15
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav).addTo(map)

//    var directions = new MapboxDireactions({
//        accessToken: mapboxgl.accessToken
//    }).addTo(map)

//    map.addControl(directions, "top-left")
}

var marker = new mapboxgl.Marker()
    .setLngLat([-117.141212, 32.722335])
    .addTo(map)
   

const nav = new mapboxgl.NavigationControl();
map.addControl(nav)


