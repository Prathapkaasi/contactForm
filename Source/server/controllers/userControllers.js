const { client } = require("./../db");

exports.getAllUsers = async (req, res) => {
  const sqlCommand = "SELECT * FROM users";
  const users = await client.query(sqlCommand);
  res.status(200).json(users.rows);
};
exports.getUser = async (req, res) => {
  const id = req.params.id * 1;

  const sqlCommand = `SELECT * FROM users where user_id =${id} `;
  const user = await client.query(sqlCommand);
  res.status(200).json(user.rows);
};
exports.createUser = async (req, res) => {
  const { fullName, email, phone } = req.body;

  const sqlCommand = `INSERT INTO users(fullName, email,phone) values($1,$2,$3) RETURNING *`;

  const newUser = await client.query(sqlCommand, [fullName, email, phone]);
  res.status(201).json(newUser);
};
exports.updateUser = async (req, res) => {
  const { fullName, email, phone } = req.body;
  const sqlCommand = `UPDATE users SET fullName = '${fullName}', email='${email}', phone = '${phone}' WHERE user_id =${
    req.params.id * 1
  } RETURNING * `;
  const updateUser = await client.query(sqlCommand);
  res.status(200).json(updateUser);
};
exports.deleteUser = async (req, res) => {
  const sqlCommand = `DELETE FROM users  WHERE user_id =${
    req.params.id * 1
  } RETURNING * `;

  await client.query(sqlCommand);
  res.status(200).json(" A user has been deleted");
};
