const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "prathapkasi",
  database: "ContactForm",
});
const connectDB = () => {
  client.connect();
  console.log("connected");
};
module.exports = { client, connectDB };
