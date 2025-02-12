import { useState, useEffect } from "react";
import "./style.scss";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="mode-toggle">
      <label className="mode-toggle__switch">
        <input
          type="checkbox"
          className="mode-toggle__input"
          onChange={toggleTheme}
        />
        <span className="mode-toggle__slider mode-toggle__slider--round"></span>
      </label>
      <p className="mode-toggle__mode-hint" data-testid="togle-hint">
        {isDarkMode ? "Dark" : "Light"} Mode
      </p>
    </div>
  );
};
