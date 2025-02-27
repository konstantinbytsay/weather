import React, { useCallback, useState } from "react";
import "./styles.scss";
import { CurrentLocationIcon } from "@src/consts/icons";

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const CurrentLocationBtn: React.FC = () => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
    }
  }, []);

  return (
    <div className="location">
      <button className="location__button" onClick={getLocation}>
        <CurrentLocationIcon />
        Current Location
      </button>
      {location.error ? (
        <p>Error: {location.error}</p>
      ) : (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default CurrentLocationBtn;
