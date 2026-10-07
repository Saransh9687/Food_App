import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurants] = useState(resList);
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");

  const displayRestraunts = restaurants
    .filter((res) =>
      res.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase()),
    )
    .filter((res) => (showTopRated ? res.info.avgRating >= 4 : true));

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(searchText);
              setSearchText(searchText.trim());
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => setShowTopRated(!showTopRated)}
        >
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
