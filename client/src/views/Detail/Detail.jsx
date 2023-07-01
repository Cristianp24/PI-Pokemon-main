import React from "react";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";


export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <div className={style.contenedor}>
      <div className={style.datos}></div>
      <h1 className={style.nombre}>{pokemon.name}</h1>
      <img className={style.image} src={pokemon.image} alt="" />
      <div className={style.datos}>
        <p>Hp: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Def: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Type: {pokemon.types}</p>
      </div>
      <Link to="/home">
        <button className={style.btn}>To Home</button>
      </Link>
    </div>
  );
}






// import React, { Component } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getPokemonById } from "../../redux/actions";
// import { Link } from "react-router-dom";
// import style from "./Detail.module.css";


// class Detail extends Component {
//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.dispatch(getPokemonById(id));
//   }

//   render() {
//     const { pokemon } = this.props;

//     return (
//       <div className={style.contenedor}>
//         <div className={style.datos}></div>
//         <h1 className={style.nombre}>{pokemon.name}</h1>
//         <img className={style.image} src={pokemon.image} alt="" />
//         <div className={style.datos}>
//           <p>Hp: {pokemon.hp}</p>
//           <p>Attack: {pokemon.attack}</p>
//           <p>Def: {pokemon.defense}</p>
//           <p>Speed: {pokemon.speed}</p>
//           <p>Height: {pokemon.height}</p>
//           <p>Weight: {pokemon.weight}</p>
//           <p>Type: {pokemon.types}</p>
//         </div>
//         <Link to="/home">
//           <button className={style.btn}>To Home</button>
//         </Link>
//       </div>
//     );
//   }
// }

// import { connect } from "react-redux";

// const mapStateToProps = (state) => ({
//   pokemon: state.pokemonDetail,
// });

// export default connect(mapStateToProps)(Detail);