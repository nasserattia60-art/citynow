console.log("LEAFLET JS")


const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    dragging: true,
    maxBoundsViscosity: 1.0,
}).setView([26.8206, 30.8025], 6);

L.control.zoom({
    position: 'bottomright'
}).addTo(map);

L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
        maxZoom: 19,
    }
).addTo(map);
