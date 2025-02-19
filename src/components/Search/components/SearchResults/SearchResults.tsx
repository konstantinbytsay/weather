import { ICityResponse } from "@src/modeles/cities";
import React from "react";
import "./styles.scss";

interface ISearchResultsProps {
  cities: ICityResponse[] | null;
}

export const SearchResults: React.FC<ISearchResultsProps> = ({
  cities = [],
}) => {
  return (
    <div className="search__results ">
      <ul className="cities">
        {cities &&
          cities.map((item) => {
            return <li>{item.name}</li>;
          })}
      </ul>
    </div>
  );
};
