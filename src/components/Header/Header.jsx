import React, { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import css from "./Header.module.css";

const Header = ({ ads, setFilteredAds }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const filteredAds = ads.filter(
      (ad) => ad.city.toLowerCase().trim() === query
    );
    // find the card by query
    setFilteredAds(filteredAds);

    if (filteredAds.length < 1) {
      Notify.warning("There are no results in your city or enter city name");
    } else {
      Notify.success(`There are ${filteredAds.length} results in your city.`);
    }
  };
  return (
    <header className={css.header}>
      <p className={css.title}>Rent your Coffee Machine</p>
      <form onSubmit={handlerSubmit} className={css.form}>
        <label>
          <input
            className={css.input}
            placeholder="Enter city in English"
            onChange={handleInputChange}
          />
        </label>
        <button className={css.button}>Search</button>
      </form>
    </header>
  );
};

export default Header;
