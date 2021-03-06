const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/teams", (req, res, next) => {
  Team.findAll()
    .then(list => res.json(list))
    .catch(next);
});

router.post("/teams", (req, res, next) => {
  Team.create(req.body)
    .then(team => {
      res.json(team);
    })
    .catch(next);
});

router.get("/teams/:id", (req, res, next) => {
  console.log("req.params.id :", typeof req.params.id);
  Team.findByPk(req.params.id)
    .then(team => {
      if (!team) {
        res.status(404).end();
      } else {
        res.json(team);
      }
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  console.log("Now I am showing something in the browser!");
  res.send("Welcome to my backend api");
});

module.exports = router;
