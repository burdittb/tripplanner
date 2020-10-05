import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnVyZGl0dGIiLCJhIjoiY2tmd3BjeDNoMW1iODJ5cWd3aG16ejR1NyJ9.6SP4_hBVmB2eXIQI_PXHtA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activities", [-74.009151, 40.705086]);

marker.addTo(map);
console.log("mapboxgl object", mapboxgl);
