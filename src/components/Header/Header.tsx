import "./styles.scss";
import { Search } from "../Search/Search";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import CurrentLocationBtn from "../CurrentLocationBtn/CurrentLocationBtn";

export const Header = () => {
  return (
    <div className="header">
      <ThemeToggle />
      <Search />
      <CurrentLocationBtn />
    </div>
  );
};
