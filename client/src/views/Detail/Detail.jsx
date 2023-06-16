import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'



export default function Detail(){

    const [pokemon, setPokemon] = useState({})

    const { idDetail } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/pokemons/${idDetail}`)
          .then((response) => response.json())
          .then((pokemon) => {
            if (pokemon.name) {
              setPokemon(pokemon);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((error) => {
            window.alert("No hay personajes con ese ID");
          });
        return setPokemon({});
      }, [idDetail]);
      
    return(
        <div >
              <h1 className={style.datos}>Name: {pokemon.name}</h1>
              <img src={pokemon.image} alt="" />
              <p>Hp: {pokemon.hp}</p>
              <p>Attack: {pokemon.attack}</p>
              <p>Def: {pokemon.defense}</p>
              <p>Speed: {pokemon.speed}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Type: {pokemon.types}</p>
          </div>
        
    )
}