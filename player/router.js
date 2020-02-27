const { Router } = require("express");
const Team = require("../team/model");
const Player = require("./model");
const router = new Router();
//
router.get("/players", (request, response, next) => {
  Player.findAll()
    .then(list => response.json(list))
    .catch(error => next(error));
});
router.post("/players", (request, response, next) => {
  Player.create(request.body)
    .then(player => response.json(player))
    .catch(next);
});
router.get("/players/:playerId", (request, response, next) => {
  console.log(request.params.playerId);
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => {
      if (!player) {
        response.status(404).end();
      } else {
        response.json(player);
      }
    })
    .catch(next);
});
router.put("/players/:playerId", (request, response, next) => {
  const number = request.body.number;
  // console.log(number);
  Player.findByPk(request.params.playerId)
    .then(player => {
      if (player) {
        player.update({ number }).then(player => response.json(player));
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});
module.exports = router;
