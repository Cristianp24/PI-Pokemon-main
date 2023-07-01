const { Router } = require("express");
const { typesHandler } = require("../handlers/typesHandlers");

const router = Router();

router.get("/", typesHandler);

module.exports = router;
