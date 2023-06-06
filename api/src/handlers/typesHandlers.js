const pokemonType = require("../controllers/typesControllers");

const typesHandler = async (req, res) => {
  try {
    const types = await pokemonType();

    res.status(200).json(types);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { typesHandler };
