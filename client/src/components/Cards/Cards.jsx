import React from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card";
import Paginate from "../Pagination/Pagination";
import { useSelector } from "react-redux";

export default function Cards({ pokemons }) {
  const { numPage } = useSelector((state) => state);

  let desde = (numPage - 1) * 12;
  let hasta = numPage * 12;

  if (!Array.isArray(pokemons)) {
    return null; // O muestra un mensaje de error, o retorna algo apropiado cuando no haya datos disponibles.
  }

  const slicedPokemons = pokemons.slice(desde, hasta); // Utiliza slice() en el array pokemons

  let cantPages = Math.ceil(pokemons.length / 12);

  return (
    <div className={style.contenedorCartas}>
      {slicedPokemons &&
        slicedPokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />
          );
        })}

      <Paginate cantPages={cantPages} />
    </div>
  );
}
