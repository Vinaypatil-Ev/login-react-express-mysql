const db = require("./db.connect");
const express = require("express");
const cors = require("cors");
// console.log(db)
// db.connect((err) => {
//     if (err) {
//         console.log("There is and error: ", err.sqlMessage)
//         // throw err
//     } else {
//         console.info("mysql connected successfully")
//     }
// })

const app = express();
const PORT = 3200;
app.use(cors());
app.use(express.json())

app.get("/api/getusers", (req, res) => {
    // console.log("geting")
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.log("Error: ", err);
        }
        res.send(results);
    });
});

app.post("/api/isuser", (req, res) => {
    const userid = req.query.username || req.body.username;
    const userpass = req.query.password || req.body.password;
    // console.log("post", userid, userpass, JSON.stringify(req.body), req.body.username);
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [userid, userpass],
        (err, results) => {
            if (err) {
                res.send({err: "Error while login"})
            }else if (results.length > 0) {
                res.send({err: false, isUser: true})
            }else {
                res.send({err: false, isUser: false})
            }
        }
    );
});

app.post("/api/createuser", (req, res) => {
    const userid = req.query.username;
    const userpass = req.query.password;
    db.query(
        "INSERT INTO users(username, password) VALUES (?, ?)",
        [userid, userpass],
        (err, results) => {
            if (err) {
                res.send({err: "Error while creating account"})
            }else {
                res.send({err: false, msg: "user created succesfully"})
            }
        }
    );
});

app.listen(PORT, () => {
    console.log("Mysql server is running on port: ", PORT);
})