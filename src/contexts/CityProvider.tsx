import React, { useState, ReactNode } from 'react';
import { CityContext } from './CityContext';



export const CityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const setCityCoordinates = (lat: number, lon: number) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <CityContext.Provider value={{ latitude, longitude, setCityCoordinates }}>
      {children}
    </CityContext.Provider>
  );
};




