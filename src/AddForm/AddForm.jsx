import React, { useState } from "react";
import { getCoordinates, MOCK_API_URL } from "../services/API";
import css from "./AddForm.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";

const AddForm = ({ updateAds, ads }) => {
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
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

        const isOnBackend = ads.find(
          (ad) => ad.city.toLowerCase() === address.toLowerCase()
        );

        if (address === isOnBackend?.city) {
          const sameLat = parseFloat(lat) + 0.001;
          const sameLon = parseFloat(lon) + 0.001;
          formData.geo = [sameLat, sameLon];
        } else {
          formData.geo = [lat, lon];
        }

        const postResponse = await axios.post(MOCK_API_URL, formData);

        Notify.success("You advertisement successfully posted");

        updateAds((prevAds) => [...prevAds, postResponse.data]);
      } catch (error) {
        Notify.failure("Error, cannot post your advertisement");
      } finally {
        setAddress("");
        setTitle("");
        setImage("");
        setPrice("");
      }
    };

    fetchCoordinates();
  };

  return (
    <aside className={css.asideForm}>
      {" "}
      <form onSubmit={handleSubmit} className={`${css.form} container`}>
        <h2 className={css.title}>Enter your ads info</h2>
        <label>
          <input
            name="city"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="City"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            placeholder="Image URL"
            className={css.input}
          />
        </label>
        <label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            placeholder="Price in UAH"
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Add an Advertisement
        </button>
      </form>
      <div className={css.linksWrapper}>
        <h3>
          To add image for your ad, you can copy one of these
          <span className={css.span}> URL</span> in 'image' input
        </h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            https://images.pexels.com/photos/4349798/pexels-photo-4349798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
          </li>
          <li className={css.listItem}>
            https://images.pexels.com/photos/6032796/pexels-photo-6032796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
          </li>
          <li className={css.listItem}>
            https://images.pexels.com/photos/302889/pexels-photo-302889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AddForm;
