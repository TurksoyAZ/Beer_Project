import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ListeBeer from "./Pages/ListeBeer";
import DetalBeer from "./Pages/DetalBeer";
import RandomBeer from "./Pages/RandomBeer";

function App() {
  const [data, setData] = useState([]);
  const apiKey = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    fetch(apiKey)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/toListeBeer" element={<ListeBeer data={data} />} />
          <Route path="/toRandomBeer" element={<RandomBeer />} />
          <Route path="/detal/:id" element={<DetalBeer data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
