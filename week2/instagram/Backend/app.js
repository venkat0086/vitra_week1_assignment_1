// const express = require("express");
// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "nodemysql",
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Mysql Created...");
// });

// const app = express();

// app.get("/createtable", (req, res) => {
//   let sql =
//     "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post table Created...");
//   });
// });

// app.get("/addpost", (req, res) => {
//   let post = { title: "post one", body: "this is post number one" };
//   let sql = "INSERT INTO posts SET ?";
//   let query = db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post added...");
//   });
// });

// app.get("/getpost", (req, res) => {
//   let sql = "SELECT * FROM posts";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Pot fetched...");
//   });
// });

// app.get("/getpost/:id", (req, res) => {
//   let sql = `SELECT * FROM posts WHERE id=${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Pot fetched...");
//   });
// });

// app.get("/updatepost/:id", (req, res) => {
//   let newTitle = "Updated Title";
//   let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Updated post...");
//   });
// });

// app.listen("3000", () => {
//   console.log("Server started on port 3000");
// });
