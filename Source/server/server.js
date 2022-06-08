const app = require("./app");
const { connectDB } = require("./db");
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is running on port ${process.env.PORT}`);
});
