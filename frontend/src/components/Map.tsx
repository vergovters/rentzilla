import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useState } from "react";
import axios from "axios";
import { IPin } from "../models/IPin";

const url = import.meta.env.VITE_BACKEND

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
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get(`${url}/pins`);
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  console.log(pins);


  const createClusterCustomIcon = function (cluster: any) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={position} zoom={10}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {pins.map((pin: IPin) => (
            <Marker key={pin._id} position={[pin.lat, pin.long]} >
              <Popup>{pin.title}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        
    </MapContainer>
  );
}

export default Mambox;