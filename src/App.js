import React, { useState } from "react";
import CitiesList from "./components/CitiesList";

const App = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [alert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (city) {
      const newCities = [...cities, city];
      setCities(newCities);
      setCity("");
    } else {
      setAlert("veuillez remplire le champ");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    }
  };

  return (
    <>
      <section>
        <form className="form" onSubmit={handleSubmit}>
          {alert && <h6 className="form-alert">{alert}</h6>}
          <input
            type="text"
            className="form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <CitiesList cities={cities} />
    </>
  );
};

export default App;
