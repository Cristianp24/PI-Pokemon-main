import React from "react";
import style from './Detail.module.css'
import { useEffect ,} from "react";
import { useDispatch, useSelector} from 'react-redux'; 
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";
import { Link } from "react-router-dom";




export default function Detail(){ 

  const dispatch = useDispatch();

  const {id} = useParams();
  

  const pokemon = useSelector((state)=>state.pokemonDetail)

 
  useEffect(() => {
    dispatch(getPokemonById(id))
  },[id]);

    
      
    return(
        <div className={style.contenedor} >
           <Link to='/home' ><button className={style.btn}>To Home</button></Link>
              <h1 className={style.nombre}>{pokemon.name}</h1>
              <img className={style.image} src={pokemon.image} alt="" />
              <div className={style.datos}>
              <p >Hp:{pokemon.hp}</p>
              <p >Attack:{pokemon.attack}</p>
              <p >Def:{pokemon.defense}</p>
              <p >Speed:{pokemon.speed}</p>
              <p >Height:{pokemon.height}</p>
              <p >Weight:{pokemon.weight}</p>
              <p >Type:{pokemon.types}</p>
              </div>
              
          </div>
        
    )
}