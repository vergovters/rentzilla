import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, DivIconOptions, LatLngTuple, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useState } from "react";
import axios from "axios";
import { IPin } from "../models/IPin";
import PinComp from "./PinComp";
import { useMapEvents } from "react-leaflet";

const url = import.meta.env.VITE_BACKEND

const Mambox = () => {
  const position: LatLngTuple = [50.44, 30.52];
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

  const createClusterCustomIcon = function (cluster: any) {
    const iconOptions: DivIconOptions = {
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
  };

  return new (divIcon as any)(iconOptions);
  };
  
  const handleClick = (e: any) => {
    console.log(e)
  }

  useMapEvents({
    dblclick: handleClick 
  });

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
              <Popup>
                <PinComp {...pin}/>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        
    </MapContainer>
  );
}

export default Mambox;