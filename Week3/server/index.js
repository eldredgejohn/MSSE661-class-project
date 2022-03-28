const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/src"));
app.use("/img", express.static(__dirname + "/public/img"));

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Pa33w0rd!',
  //database: 'database name'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.listen(3000, function() {
    console.log("Server started at http://localhost:%s", 3000);
});
