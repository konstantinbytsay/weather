export interface ICityContext {
  latitude: number | null;
  longitude: number | null;
  setCityCoordinates: (latitude: number, longitude: number) => void;
}
