const AbstractManager = require("./AbstractManager");

class GameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  add(body) {
    const { mode, is_multiplayer: isMultiplayer, grid_size: gridSize } = body;
    const SQL = `INSERT INTO ${this.table} 
      (mode, is_multiplayer, grid_size) VALUES (?, ?, ?)`;
    return this.database.query(SQL, [
      mode || 1,
      isMultiplayer || 1,
      gridSize || 1,
    ]);
  }

  findDuplicate(body) {
    const { mode, is_multiplayer: isMultiplayer, grid_size: gridSize } = body;
    return this.database.query(
      `SELECT * FROM ${this.table} AS u 
      WHERE mode = (?) 
      AND is_multiplayer = (?)
      AND grid_size = (?)`,
      [mode, isMultiplayer, gridSize]
    );
  }

  update(body, id) {
    const { mode, is_multiplayer: isMultiplayer, grid_size: gridSize } = body;
    const SQL = `UPDATE ${this.table} 
      SET mode = ?, is_multiplayer = ?, grid_size = ?
      WHERE id = ?`;
    return this.database.query(SQL, [mode, isMultiplayer, gridSize, id]);
  }
}

module.exports = GameManager;
