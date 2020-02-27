const { Router } = require("express");
const Player = require("./model");

const router = new Router();

router.get("/players", (req, res, next) => {
  Player.findAll()
    .then(list => res.json(list))
    .catch(next);
});

router.post("/players", (req, res, next) => {
  Player.create(req.body)
    .then(player => {
      res.json(player);
    })
    .catch(next);
});

router.get("/players/:id", (req, res, next) => {
  console.log("req.params.id :", typeof req.params.id);
  Player.findByPk(req.params.id)
    .then(player => {
      if (!player) {
        res.status(404).end();
      } else {
        res.json(player);
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  console.log("Now I am showing something in the browser!");
  res.send("Welcome to my backend api");
});

module.exports = router;
