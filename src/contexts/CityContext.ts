import { ICityContext } from "@src/modeles/cityContext";
import { createContext } from "react";

export const CityContext = createContext<ICityContext | undefined>(undefined);
