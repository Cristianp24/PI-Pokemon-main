const axios = require("axios");
const { Pokemon, Type } = require("../db");


const pokemons = async () => {
   
  const Dbpokes = await Pokemon.findAll({
    include: {
      model: Type,
    attributes:["name"]
      }
    
  });


  const apiUrl = await axios.get(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const apiInfo = await apiUrl.data.results.map((e) => e.url);

  const arrayLinksPokemons = [...apiInfo];

  const arrayAxiosPokemon = arrayLinksPokemons.map((e) => axios.get(e)); // array de promesas
  const pokemonPromise = await Promise.all(arrayAxiosPokemon);
 
  const pokemonFilter = pokemonPromise.map((e) => {
    return {
      name: e.data.name,
      id: e.data.id,
      height: e.data.height,
      weight: e.data.weight,
      types:e.data.types.map((e) => {
        return { name: e.type.name };
      }),
      image: e.data.sprites.front_default,
      hp: e.data.stats[0]["base_stat"],
      attack: e.data.stats[1]["base_stat"],
      defense: e.data.stats[2]["base_stat"],
      speed: e.data.stats[5]["base_stat"],
      
    
    };
  });
   return [...Dbpokes,...pokemonFilter];
};




const pokemonById = async (idPokemon) => {
  const dataId = isNaN(idPokemon);

  if (dataId) {
    const dataPokemon = await Pokemon.findOne({
      where: {
        id: idPokemon,
      },
      include: {
        model: Type,
        through: {
          attributes: [],
        },
      },
    });
    const infoPokemon = {
      id: dataPokemon.id,
      name: dataPokemon.name,
      image: dataPokemon.image,
      types: dataPokemon.types.map((el) => el.name).join(" - "),
      hp: dataPokemon.hp,
      attack: dataPokemon.attack,
      defense: dataPokemon.defense,
      speed: dataPokemon.speed,
      height: dataPokemon.height,
      weight: dataPokemon.weight,
      created: dataPokemon.created,
    };
    return infoPokemon;
  } else {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );

    const pokemonApi = res.data;
    const infoPokemon = {
      id: pokemonApi.id,
      name: pokemonApi.name,
      image: pokemonApi.sprites.other["official-artwork"].front_default,
      types: pokemonApi.types.map((el) => el.type.name).join(" - "),
      hp: pokemonApi.stats[0].base_stat,
      attack: pokemonApi.stats[1].base_stat,
      defense: pokemonApi.stats[2].base_stat,
      speed: pokemonApi.stats[5].base_stat,
      height: pokemonApi.height,
      weight: pokemonApi.weight,
    };

    return infoPokemon;
  }
};

const createPokemon = async ({name,image,hp,attack,defense,speed,height,weight,types}) => {
 console.log({name,image,hp,attack,defense,speed,height,weight,types});
  const createdPokemon = await Pokemon.create({
    name: name.toLowerCase(),
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
    
  
  });

  
   let pokeTypes = await Type.findAll({
    where: {
      name : types
    }
    
   })
   await createdPokemon.addType(pokeTypes)
  return createdPokemon;
};


const getPokemonByName = async (name) => {
  
  const pokeNameDb = await Pokemon.findAll({where: {name:name},include: Type});
  if(pokeNameDb.length) {
    return pokeNameDb
  }else {

let linkData = `https://pokeapi.co/api/v2/pokemon/${name}`;   
     
     const {data} = await axios.get(linkData)
    
    
     const pokemon = {
         id : data.id,
         name : data.name,
         hp : data.stats[0].base_stat,
         attack : data.stats[1].base_stat,
         defense : data.stats[2].base_stat,
         speed : data.stats[5].base_stat,
         height : data.height,
         weight : data.weight,
         image: data.sprites.other.dream_world.front_default,
         types: data.types.map((e) => {
          return { name: e.type.name };
        }),
     };
    
     return pokemon
      }
    }
    
  



module.exports = {
  getPokemonByName,
  pokemonById,
  createPokemon,
  pokemons,
};
