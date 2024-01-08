import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Icon } from "leaflet";

const Map = ({ markers, selectedAd, onMarkerClick }) => {
  const customIcon = new Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [38, 38], //size of the icon
  });

  const handleMarkerClick = (id) => {
    const selectedMarker = markers.find((marker) => marker.id === id);
    onMarkerClick(selectedMarker);
  };

  return (
    <section>
      <MapContainer center={[48.5079, 32.2623]} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ geo, title, id, price, image, city }) => (
          <Marker
            position={geo}
            key={id}
            icon={customIcon}
            opacity={selectedAd && selectedAd.id === id ? 1 : 0.5}
            eventHandlers={{
              click: () => handleMarkerClick(id),
            }}
          >
            <Popup>
              <div>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{price} uah</p>
                <p>{city.charAt(0).toUpperCase() + city.slice(1)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
