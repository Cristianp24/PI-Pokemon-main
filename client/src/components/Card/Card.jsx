import React from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({id,name,image,type}) {
 
  const navigate = useNavigate();

 function navigateHandler() {
navigate(`/pokemons/${id}`)
 }


  return (
    <div key={id} onClick={navigateHandler}className={style.Carta}>
      
       <p className={style.name}>{name}</p>
    
      <img alt='not found'src={image} />
      {type.map((element)=>(<span className={style.types}>{element}</span>))}
    </div>
  );
}
