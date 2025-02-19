import { searchCity } from "@src/api/search";
import { ICityResponse } from "@src/modeles/cities";
import { Nullable } from "@src/modeles/global";
import { useState, useEffect } from "react";

export const useSearchCity = () => {
  const [data, setData] = useState<Nullable<ICityResponse[]>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [city, setCity] = useState<string>("");
  const [isSearchShown, setIsSearchShown] = useState<boolean>(false);

  useEffect(() => {
    if (!city && city == "") return;
    setData(null);
    setLoading(false);
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await searchCity(city);

        setData(result);
        setIsSearchShown(true);
      } catch (err) {
        setError(err as Error);
        setIsSearchShown(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  const clearSearch = () => {
    setCity("");
    setIsSearchShown(false);
  };

  return { data, loading, error, setCity, isSearchShown, clearSearch };
};
