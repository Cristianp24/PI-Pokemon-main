const { Type } = require("../db");
const axios = require("axios");

const pokemonType = async () => {
  const Dbtypes = await Type.findAll();

  if (!Dbtypes.length) {
    const infoApi = await axios.get("https://pokeapi.co/api/v2/type");

    const typesApi = infoApi.data.results.map((el) => el.name);
    typesApi.map(async (el) => {
      await Type.findOrCreate({
        where: { name: el },
      });
    });

    const allTypes = await Type.findAll();
    return allTypes;
  } else {
    return Dbtypes;
  }
};

module.exports = pokemonType;
