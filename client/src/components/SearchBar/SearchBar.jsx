
import React from "react";
import style from "./SearchBar.module.css";
import { getNamePokemons } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function SearchBar ()  {
  
   const dispatch = useDispatch();
   const [name,setName] = useState("");

   function handleInputChange(event){
       event.preventDefault();
       setName(event.target.value);
       
   }

   function handleSubmit(event){
       event.preventDefault();
       dispatch(getNamePokemons(name));
       setName("");
   }
  
      
        return (
           <div >
            <input type="text" 
            placeholder="Search poke..."
            onChange={(event) => handleInputChange(event)}  className={style.input} value={name}

            />

            <button type="submit" onClick={(event)=> handleSubmit(event)}  className={style.searchButton}>
            Search
            </button>
           </div>
        );
     }


     