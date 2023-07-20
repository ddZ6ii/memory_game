const AbstractManager = require("./AbstractManager");

class UserGameManager extends AbstractManager {
  constructor() {
    super({ table: "user_game" });
  }

  add(body) {
    const { time, move, score, game_id: gameId, user_id: userId } = body;
    const SQL = `INSERT INTO ${this.table}
      (time, move, score, game_id, user_id) VALUES (?, ?, ?, ?, ?)`;
    return this.database.query(SQL, [time, move, score, gameId, userId]);
  }

  update(body, id) {
    const { time, move, score, game_id: gameId, user_id: userId } = body;
    const SQL = `UPDATE ${this.table}
      SET time = ?, move = ?, score = ?, game_id = ?, user_id = ?
      WHERE id = ?`;
    return this.database.query(SQL, [time, move, score, gameId, userId, id]);
  }
}

module.exports = UserGameManager;
