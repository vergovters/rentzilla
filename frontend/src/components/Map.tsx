import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const markers = [
  {
    geocode: [50.444, 30.521],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [50.443, 30.522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [50.441, 30.52],
    popUp: "Hello, I am pop up 3"
  }
];

const Mambox = () => {
  const position = [50.44, 30.52];

  const createClusterCustomIcon = function (cluster: any) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker) => (
            <Marker key={marker.popUp} position={marker.geocode} >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        
    </MapContainer>
  );
}

export default Mambox;