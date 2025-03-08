import { Header } from "@src/components/Header/Header";
import { useCity } from "@src/hooks/useCity";

export const Home = () => {
  const { latitude, longitude } = useCity()
  return (   
    <>
      {latitude}<br />
       {longitude}<br/>
      <Header />
      </>
  );
};
