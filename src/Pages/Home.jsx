import React, { useEffect, useState } from "react";
import Map from "../components/Map/Map";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import AddForm from "../components/AddForm/AddForm";
import css from "./Home.module.css";
import { getAdsInfo } from "../services/API";

const Home = () => {
  const [selectedAd, setSelectedAd] = useState(null);
  const [filteredAds, setFilteredAds] = useState([]);
  const [ads, setAds] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loaded) {
          const response = await getAdsInfo();

          setAds(response.data);
          setLoaded(true);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [loaded]);

  const updateAds = (newAds) => {
    setAds(newAds);
  };

  const handleMarkerClick = (selectedAd) => {
    setSelectedAd(selectedAd);
  };

  return (
    <>
      <Header ads={ads} setFilteredAds={setFilteredAds} />
      <div className={css.container}>
        <AddForm updateAds={updateAds} ads={ads} />
        <div className={css.mapContainer}>
          <Map
            selectedAd={selectedAd}
            markers={ads}
            onMarkerClick={handleMarkerClick}
          />
        </div>
        <Sidebar
          setSelectedAd={setSelectedAd}
          ads={ads}
          filteredAds={filteredAds}
          selectedAd={selectedAd}
        />
      </div>
    </>
  );
};

export default Home;
