import React from "react";
import "./styles.scss";

interface SpinnerProps {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className = "" }) => {
  return <div className={"loading " + className}></div>;
};
