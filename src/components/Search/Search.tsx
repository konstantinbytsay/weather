import { SearchIcon } from "@src/consts/icons";
import "./styles.scss";
import { useSearchCity } from "@src/hooks/useSearchCity";
import { Spinner } from "../Spinner/Spinner";
import { SearchResults } from "./components/SearchResults/SearchResults";

export const Search = () => {
  const { data, loading, setCity, isSearchShown } = useSearchCity();

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
      {isSearchShown && <SearchResults cities={data} />}
    </div>
  );
};
