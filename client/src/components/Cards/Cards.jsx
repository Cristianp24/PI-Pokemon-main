import React from 'react';
import style from './Cards.module.css';
import Card from '../Card/Card';
import Paginate from "../Pagination/Pagination";
import { useSelector } from "react-redux";




export default function Cards({pokemons}){

    const { numPage } = useSelector((state) => state);

    let desde = (numPage - 1) * 12;
    let hasta = numPage * 12;

    let viewPokemons = pokemons.slice(desde, hasta);
    let cantPages = Math.ceil(pokemons.length / 12);



                    return (

                        <div className={style.contenedorCartas}>
                             {viewPokemons &&
                    viewPokemons.map((pokemon) => {
                            
                                return <Card
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                types={pokemon.types}
/>
                            })}

<Paginate cantPages={cantPages} />
               </div>
                    )
                    
          }


  