import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

const City = ({ city }) => {
  const [weather, setWeather] = useState([]);
  const token =
    "b28ad73339f3c20cddcc62b425beda3d131ff439caa5686c339f296456d5c7f6";
  const url = `https://api.meteo-concept.com/api/location/cities?token=${token}&search=${city}`;
  const { isLoading, data } = useFetch(url);

  const getLocation = useCallback(async () => {
    const weather = await data;
    setWeather(weather.cities[0]);
  }, [data]);

  const { insee, cp, latitude, longitude, altitude, name } = weather;

  useEffect(() => {
    getLocation();
  }, [getLocation]);

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
