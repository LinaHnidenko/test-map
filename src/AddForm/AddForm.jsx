import React, { useState } from "react";

import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const AddForm = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleGeocode = async () => {
    const options = {
      method: "GET",
      url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
      params: {
        city: address,
      },
      headers: {
        "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(options);
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      setCoordinates([lat, lon]);
      console.log(response.data[0].lat);
    } catch (error) {
      console.error(error);
    }

    // try {
    //   const response = await axios.get(
    //     `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
    //       address
    //     )}&key=YOUR_API_KEY`
    //   );
    //   const { lat, lng } = response.data.results[0].geometry;
    //   setCoordinates({ lat, lng });
    // } catch (error) {
    //   console.error("Error geocoding address:", error);
    // }
  };

  return (
    <div>
      <label>
        Enter Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button onClick={handleGeocode}>Geocode</button>

      {coordinates && (
        <div>
          <h2>Coordinates:</h2>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lon}</p>

          {/* <MapContainer
            center={coordinates}
            zoom={13}
            style={{ height: "300px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[coordinates.lat, coordinates.lng]}>
              <Popup>{address}</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      )}
    </div>
  );
  // return (
  //   <aside>
  //     <form>
  //       <label>
  //         <input placeholder="Enter city"></input>
  //       </label>
  //       <button>Submit</button>
  //     </form>
  //   </aside>
  // );
};

export default AddForm;
