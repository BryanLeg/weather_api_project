import React from "react";
import City from "./City";

const List = ({ cities }) => {
  return (
    <div>
      {cities.map((city, index) => {
        return <City city={city} key={index} />;
      })}
    </div>
  );
};

export default List;
