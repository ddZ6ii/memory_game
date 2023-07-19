const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.database.query(
      `SELECT u.id AS id_user, u.pseudo, u.email, u.password, r.is_admin, p.id AS id_preference 
      FROM ${this.table} AS u 
      INNER JOIN role AS r ON u.role_id = r.id 
      LEFT JOIN preference AS p ON u.preference_id = p.id 
      WHERE email = (?)`,
      [email]
    );
  }

  add(body) {
    const {
      pseudo,
      email,
      password,
      preference_id: preferenceId,
      role_id: roleId,
    } = body;
    const SQL = `INSERT INTO ${this.table} 
      (pseudo, email, password, preference_id, role_id) VALUES (?, ?, ?, ?, ?)`;
    return this.database.query(SQL, [
      pseudo,
      email,
      password,
      preferenceId || 1,
      roleId || 1,
    ]);
  }

  update(body, id) {
    const {
      pseudo,
      email,
      password,
      preference_id: preferenceId,
      role_id: roleId,
    } = body;
    const SQL = `UPDATE ${this.table} 
      SET pseudo = ?, email = ?, password = ?, preference_id = ?, role_id = ? 
      WHERE id = ?`;
    return this.database.query(SQL, [
      pseudo,
      email,
      password,
      preferenceId || 1,
      roleId || 1,
      id,
    ]);
  }
}

module.exports = UserManager;
