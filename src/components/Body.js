import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurants] = useState(resList);
  const [showTopRated, setShowTopRated] = useState(false);

  const displayRestraunts = showTopRated
    ? restaurants.filter((res) => res.info.avgRating >= 4)
    : restaurants;

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => setShowTopRated(!showTopRated)}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {displayRestraunts.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
