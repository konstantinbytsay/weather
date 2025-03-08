import React, { useCallback,  } from "react";
import "./styles.scss";
import { CurrentLocationIcon } from "@src/consts/icons";
import { useCity } from "@src/hooks/useCity";


const CurrentLocationBtn: React.FC = () => {
  const { setCityCoordinates } = useCity();

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
         setCityCoordinates(position.coords.latitude,position.coords.longitude)
        },
        (error) => {
           console.log(error)
        }
      );
    } else {
      return null
    }
  }, [navigator,setCityCoordinates]);

  return (
    <div className="location">
      <button className="location__button" onClick={()=>getLocation()}>
        <CurrentLocationIcon />
        Current Location
      </button>
  </div>
  );
};

export default CurrentLocationBtn;
