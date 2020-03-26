const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "TarotAlfred&&7",
  database: "odyssey"
});
module.exports = connection;
