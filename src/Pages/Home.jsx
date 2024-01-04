import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import AddForm from "../AddForm/AddForm";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <AddForm />
        <div className={css.mapContainer}>
          <Map />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
