import React from "react";
import css from "./SidebarItem.module.css";

const SidebarItem = ({ title, image, price, onSelect, isSelected, city }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <>
      <li
        className={
          isSelected ? `${css.selected} ${css.listItem}` : css.listItem
        }
        onClick={handleClick}
      >
        <img src={image} alt="coffee machine" width="300px" height="100px" />
        <h2>{title}</h2>
        <p>{price} UAH</p>
        <p>{city.charAt(0).toUpperCase() + city.slice(1)} </p>
      </li>
    </>
  );
};

export default SidebarItem;
