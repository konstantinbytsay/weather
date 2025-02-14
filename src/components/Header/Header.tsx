import "./styles.scss";
import { Search } from "../Search/Search";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Header = () => {
  return (
    <div className="header">
      <ThemeToggle />
      <Search />
    </div>
  );
};
