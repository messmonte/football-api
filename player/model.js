const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Player;
