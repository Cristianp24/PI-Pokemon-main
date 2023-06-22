// import React from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({id,name,image,types}) {
 
  const navigate = useNavigate();

 function navigateHandler() {
navigate(`/pokemons/${id}`)
 }


  return (
    <div  onClick={navigateHandler}className={style.Carta}>
      
       <p className={style.name}>{name}</p>
    
      <img className={style.img}alt='not found'src={image} />
      <p className={style.types}>
      {" "}
              {types &&
                types?.map((e, index) => {
                  return (
                    <span key={e.name}>
                      {e.name}
                      {index !== types.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
        </p>

    </div>
  );
}
