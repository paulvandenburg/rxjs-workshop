export interface Airport {
  icao: string;
  name: string;
  longitude: number;
  latitude: number;
  elevation?: number;
  iso_country: string;
  municipality: string;
}
