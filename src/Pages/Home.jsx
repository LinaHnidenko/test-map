import React, { useState } from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import AddForm from "../AddForm/AddForm";
import css from "./Home.module.css";

const Home = () => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [ads, setAds] = useState([]);

  const updateAds = (newAds) => {
    setAds(newAds);
  };

  const handleMarkerClick = (selectedAd) => {
    setSelectedAd(selectedAd);
  };

  return (
    <>
      <Header />
      <div className={css.container}>
        <AddForm updateAds={updateAds} />
        <div className={css.mapContainer}>
          <Map
            selectedAd={selectedAd}
            markers={ads}
            onMarkerClick={handleMarkerClick}
          />
        </div>
        <Sidebar
          setSelectedAd={setSelectedAd}
          updateAds={updateAds}
          selectedAd={selectedAd}
        />
      </div>
    </>
  );
};

export default Home;
