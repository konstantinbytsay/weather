import { SearchIcon } from "@src/consts/icons";
import "./styles.scss";

export const Search = () => {
  return (
    <div className="search">
      <SearchIcon />
      <input type="text" className="search__input" />
    </div>
  );
};
