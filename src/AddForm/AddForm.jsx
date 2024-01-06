import React, { useState } from "react";
import { getCoordinates } from "../services/API";
import css from "./AddForm.module.css";

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { getAdsInfo } from "../services/API";

const POST_URL = "https://65986474668d248edf248d11.mockapi.io/advertisement";

const AddForm = ({ updateAds }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityValue = e.target.elements.city.value;
    const titleValue = e.target.elements.title.value;
    const imageValue = e.target.elements.image.value;
    const priceValue = e.target.elements.price.value;

    const formData = {
      city: cityValue,
      title: titleValue,
      image: imageValue,
      price: priceValue,
    };

    const fetchCoordinates = async () => {
      try {
        const resp = await getCoordinates(address);
        const lat = resp.data[0].lat;
        const lon = resp.data[0].lon;

        formData.geo = [lat, lon];

        const postResponce = await axios.post(POST_URL, formData);
        console.log("Posted", postResponce.data);

        const response = await getAdsInfo();
        updateAds(response.data);
      } catch (error) {
        console.log("Error", error.message);
      }
    };

    fetchCoordinates();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        City:
        <input
          name="city"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <label>
        Image
        <input type="text" name="image" />
      </label>
      <label>
        Price in UAH
        <input type="number" name="price" />
      </label>
      <button>Geocode</button>
    </form>
  );
};

export default AddForm;
