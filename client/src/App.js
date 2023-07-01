import "./App.css";
import React from "react";
import { Landing, Home, Form, Detail } from "./views";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();

  const isDetailPage = /^\/pokemons\/\d+$/.test(pathname);

  return (
    <div className="App">
      {pathname !== "/" && pathname !== "/create" && !isDetailPage && (
        <NavBar />
      )}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/create" element={<Form />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/pokemons/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
