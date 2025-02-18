import { SearchIcon } from "@src/consts/icons";
import "./styles.scss";
import { useSearchCity } from "@src/hooks/useSearchCity";
import { useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import { SearchResults } from "./components/SearchResults/SearchResults";

export const Search = () => {
  const [city, setCity] = useState<string>();
  const { data, loading } = useSearchCity(city);
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        className="search__input"
        placeholder="Search for your preffered city..."
        onChange={(e) => setCity(e.target.value)}
      />
      {loading && <Spinner className="search__spinner" />}
      {data && <SearchResults cities={data} />}
    </div>
  );
};
