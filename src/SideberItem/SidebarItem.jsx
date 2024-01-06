import React from "react";

const SidebarItem = ({ title, image, price, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <li className={isSelected ? "selected" : ""} onClick={handleClick}>
      <img src={image} alt="coffee machine" width="200px" height="100px" />
      <h2>{title}</h2>
      <p>{price}</p>
    </li>
  );
};

export default SidebarItem;
