import React from "react";
import style from "./SearchBar.module.css";
import { getNamePokemons, setPage } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name) {
      alert("Ingrese nombre");
    } else {
      dispatch(getNamePokemons(name));
      setPage(1);
      setName("");
    }
  }

  return (
    <div className={style.contenedor}>
      <input
        type="text"
        placeholder="Search poke..."
        onChange={(event) => handleInputChange(event)}
        className={style.input}
        value={name}
      />

      <button
        onClick={(event) => handleSubmit(event)}
        type="submit"
        className={style.searchButton}
      >
        Search
      </button>
    </div>
  );
}
