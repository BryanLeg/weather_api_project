import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

const City = ({ city }) => {
  // states
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState([]);

  // credentials
  const token =
    "b28ad73339f3c20cddcc62b425beda3d131ff439caa5686c339f296456d5c7f6";

  // urls
  const urlLocation = `https://api.meteo-concept.com/api/location/cities?token=${token}&search=${city}`;
  const urlWeather = `http://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=59350`;

  // destructurations
  const { isLoading: locationLoading, data: dataLocation } =
    useFetch(urlLocation);
  const { insee, cp, latitude, longitude, altitude, name } = location;
  const { isLoading: weatherLoading, data: dataWeather } = useFetch(urlWeather);

  // fetch
  const getLocation = useCallback(async () => {
    const location = await dataLocation.cities[0];
    setLocation(location);
  }, [dataLocation]);
  const getWeather = useCallback(async () => {
    console.log(dataWeather);
    const weather = await dataWeather;
    setWeather(weather);
  }, [dataWeather]);

  useEffect(() => {
    getLocation();
    getWeather();
  }, [getLocation, getWeather]);

  return (
    <article>
      <h3>{name}</h3>
      <p>insee: {insee}</p>
      <p>cp: {cp}</p>
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
      <p>altitude: {altitude}</p>
    </article>
  );
};

export default City;
