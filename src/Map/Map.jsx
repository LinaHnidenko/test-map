import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const Map = () => {
  const markers = [
    {
      geocode: [48.4647, 35.0462],
      title: "Dnipro",
    },
    {
      geocode: [49.8397, 24.0297],
      title: "Lviv",
    },
    {
      geocode: [46.4825, 30.7233],
      title: "Odesa",
    },
    {
      geocode: [50.4501, 30.5234],
      title: "Kyiv",
    },
    {
      geocode: [49.5883, 34.551],
      title: "Poltava",
    },
  ];
  const customIcon = new Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [38, 38], //size of the icon
  });
  return (
    <section>
      <MapContainer center={[48.5079, 32.2623]} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ geocode, title }, idx) => (
          <Marker position={geocode} key={idx} icon={customIcon}>
            <Popup>{title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
