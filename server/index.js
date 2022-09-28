const express = require("express");
const app = express();
const port = 8080;
const knex = require("knex")(require("./knexfile"));
const cors = require("cors");

app.use(cors());

app.get("/api/getpets", (req, res) => {
  // console.log(req.params.id);
  knex("pets_3").then((petlist) => {
    res.status(201).json(petlist);
  });
});

app.get("/api/pets/:PetID", (req, res) => {
  // console.log(req.params.id);
  const { PetID } = req.params;
  knex("pets_3")
    .where({
      PetID,
    })
    .then((data) => {
      res.status(201).json(data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
