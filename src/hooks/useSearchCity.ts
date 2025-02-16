import { searchCity } from "@src/api/search";
import { ICityResponse } from "@src/modeles/cities";
import { useState, useEffect } from "react";

export const useSearchCity = (city: string) => {
  const [data, setData] = useState<ICityResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await searchCity(city);
        setData(result);
      } catch (err) {
        // Явно указываем тип ошибки
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { data, loading, error };
};
