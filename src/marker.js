import mapboxgl from "mapbox-gl";

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png",
};

const buildMarker = function (typeOfInput, arrayOfCoord) {
  console.log("input type:", typeOfInput);
  console.log("array of coords: ", arrayOfCoord);
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[typeOfInput]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(arrayOfCoord);
};

export default buildMarker;
