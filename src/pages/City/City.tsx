import { Header } from "@src/components/Header/Header";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const City: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cityId = searchParams.get("city");

  return (
    <div>
      <Header />
      <h1>City Page</h1>
      <p>City ID: {cityId}</p>
    </div>
  );
};
