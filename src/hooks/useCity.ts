import { CityContext } from "@src/contexts/CityContext";
import { ICityContext } from "@src/modeles/cityContext";
import { useContext } from "react";

export const useCity = (): ICityContext => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
