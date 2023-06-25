import {POST_POKEMON,GET_POKEMON_BY_ID,GET_NAME_POKEMONS, GET_POKEMONS,GET_ALL_TYPES, ORDER_AZ, ORDER_ATTACK, GET_TYPES, RESET_POKEMONS, FILTER_CREATED,SET_PAGE,NEXT_PAGE,PREV_PAGE} from './types'
import axios from 'axios';


export const getPokemons = () => {
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/pokemons");
        const api = info.data;
        return dispatch({
          type: GET_POKEMONS,
          payload: api,
        });
        
    }
}

export const getTypes = () => {
    return async function (dispatch) {
      const json = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: GET_ALL_TYPES,
        payload: json.data,
      });
    };
  }

  export function postPokemon(payload){
    return async function (dispatch) {
      try {
      const response = await axios.post("http://localhost:3001/pokemons",payload);
      return dispatch({
        type: POST_POKEMON,
        payload: response.data,
      });
    } catch (error) {
      alert("Algo salio mal")
    }
  };
}
  export function getNamePokemons(name){
    return async function (dispatch){
      try {
     let response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        return dispatch({type: GET_NAME_POKEMONS, payload: response.data})
      } catch (error) {
        alert('No se encontro Pokemon')
      }
    }
  }


    export function getPokemonById(id){
      
      return async function (dispatch){
        let detail = await axios.get(`http://localhost:3001/pokemons/${id}`)
          return dispatch({type: GET_POKEMON_BY_ID, payload: detail.data})
      
      }
    }


export const orderAZ = (AzA) => {

  return { type: ORDER_AZ, payload: AzA}
}

export const orderAttack = (attack) => {

  return { type: ORDER_ATTACK, payload: attack}
}

export const getFilterPokemons = (payload) => {
  return {
      type: GET_TYPES,
      payload,
  }
}



export function resetPokemons() {
  return {
    type: RESET_POKEMONS,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export const nextPage = () => {
  return {
      type: NEXT_PAGE,
  };
};
export const prevPage = () => {
  return {
      type: PREV_PAGE,
  };
};
export const setPage = (num) => {
  return {
      type: SET_PAGE,
      payload: num,
  };
};