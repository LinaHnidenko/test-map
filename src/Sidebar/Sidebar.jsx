import React, { useEffect, useRef, useState } from "react";

import SidebarItem from "../SideberItem/SidebarItem";

const Sidebar = ({ setSelectedAd, ads, selectedAd, filteredAds }) => {
  return (
    <aside className="container">
      <ul className="">
        {filteredAds.length > 0
          ? filteredAds.map(({ title, price, image, id, city }) => (
              <SidebarItem
                key={id}
                title={title}
                price={price}
                image={image}
                city={city}
                isSelected={selectedAd && selectedAd.id === id}
                onSelect={() => setSelectedAd({ id, title, price, image })}
              />
            ))
          : ads.map(({ title, price, image, id, city }) => (
              <SidebarItem
                key={id}
                title={title}
                price={price}
                image={image}
                city={city}
                isSelected={selectedAd && selectedAd.id === id}
                onSelect={() => setSelectedAd({ id, title, price, image })}
              />
            ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
