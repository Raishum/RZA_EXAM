const express = require("express");
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({  
    host: "localhost",
    user:"root",
    password: "",
    database:"signup"
})

app.post('/signup' , (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/joinus' , (req, res) => {
    const sql = "INSERT INTO joinus (`name`, `age`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.age,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/booking', (req, res) => {
    const sql = "INSERT INTO booking (`name`, `email`,`arival`,`departure`,`adult`,`children`,`hotels`) Values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.arival,
        req.body.departure,
        req.body.adult,
        req.body.children,
        req.body.hotels,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.get('/booking', (req, res) => {
    const sql = "SELECT * FROM booking"; // Corrected typo here
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})




app.post('/payment' , (req, res) => {
    const sql = "INSERT INTO payment (`name`, `number`, `cvv`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.number,
        req.body.cvv
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})



app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success")
        } else {
            return res.json("Faile")
        }
    })
})


app.listen(8081, ()=> {
    console.log("listening")
})