import {GET_POKEMON_BY_ID, GET_NAME_POKEMONS, GET_POKEMONS, GET_ALL_TYPES,POST_POKEMON, ORDER_AZ, ORDER_ATTACK, GET_TYPES,RESET_POKEMONS,FILTER_CREATED,SET_PAGE,NEXT_PAGE,PREV_PAGE} from './types'

const initialState = {
    pokemons: [],
    types: [],
    PokemonsFiltereds: [],
    allPokemons: [],
    numPage: 1,
    pokemonDetail: [],
  
}

let historyData = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          allPokemons: action.payload,
        }
        case GET_POKEMON_BY_ID:
          return {
              ...state,
              pokemonDetail: action.payload,
          }
  

        case GET_ALL_TYPES:
          return { ...state, types: action.payload  };
    
        case POST_POKEMON:
          return { ...state }
          
          case ORDER_AZ: 
      if (action.payload === "Z-A") {
        return {
          ...state,
          PokemonsFiltereds: state.pokemons.sort((a, b) =>
            b.name.localeCompare(a.name)
          ),
        };
      } else if (action.payload === "A-Z") {
        return {
          ...state,
          PokemonsFiltereds: state.pokemons.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }
      break;
      case GET_NAME_POKEMONS:
    return{
      ...state,
      pokemons: action.payload,
   
    };

      case ORDER_ATTACK:
        if (action.payload === "(+-) Attack") {
          return {
            ...state,
            PokemonsFiltereds: state.pokemons.sort(
              (a, b) => b.attack - a.attack
            ),
          };
        } else if (action.payload === "(-+) Attack") {
          return {
            ...state,
            PokemonsFiltereds: state.pokemons.sort(
              (a, b) => a.attack - b.attack
            ),
          };
        }
        break;

        case GET_TYPES:
          const allPokemons = state.allPokemons;
          const typeFiltered =
            action.payload === "All"
              ? allPokemons
              : allPokemons.filter((e) =>
                  e.types.some((type) => type.name === action.payload)
                ); 
          return {
            ...state,
            pokemons: typeFiltered, //en mi estado filteredPokemons suceda todo lo de arriba,ya que no se puede hacer logica adentro del return.
      
          };

          case RESET_POKEMONS:
            const allPokemonsTotal = [...state.allPokemons];
            return {
            ...state,
            pokemons: allPokemonsTotal,
    
          };

          case FILTER_CREATED:
            const all = state.allPokemons;
            const filtered = action.payload === "Created" ?
            all.filter(el => el.created) :
            all.filter(el => !el.created);
            return {
                ...state,
                pokemons: action.payload === "All" ? all : filtered 
            }

            case NEXT_PAGE:
              historyData = {
                  ...state,
                  numPage: state.numPage + 1,
                  type: NEXT_PAGE,
              };
  
              return {
                  ...state,
                  numPage: state.numPage + 1,
              };
          case PREV_PAGE:
              historyData = {
                  ...state,
                  numPage: state.numPage - 1,
                  type: PREV_PAGE,
              };
  
              return {
                  ...state,
                  numPage: state.numPage - 1,
              };
          case SET_PAGE:
              historyData = {
                  ...state,
                  numPage: action.payload,
                  type: SET_PAGE,
              };
  
              return {
                  ...state,
                  numPage: action.payload,
              };

        default:
            return {
              ...state,
            }
    }
}



          export default rootReducer;