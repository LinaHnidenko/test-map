import React, { useEffect, useState } from "react";
import { getAdsInfo } from "../services/API";
import SidebarItem from "../SideberItem/SidebarItem";

const Sidebar = ({ setSelectedAd, updateAds, selectedAd }) => {
  const [adsInfo, setAdsInfo] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!loaded) {
          const response = await getAdsInfo();

          setAdsInfo(response.data);
          setLoaded(true);
          updateAds(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [loaded, updateAds]);

  return (
    <aside>
      <ul>
        {adsInfo.map(({ title, price, image, id }) => (
          <SidebarItem
            key={id}
            title={title}
            price={price}
            image={image}
            isSelected={selectedAd && selectedAd.id === id}
            onSelect={() => setSelectedAd({ id, title, price, image })}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
