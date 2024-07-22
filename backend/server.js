import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bycrypt, { hash } from 'bcrypt';

const app = express()

app.use(express.json())

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db'
})

app.post("register", (req, res) => {
    const sql = "INSER INTO usuarios ('username', 'email, 'password') VALUES (?)";
    bycrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json("Error")
        const values = [req.body.username, req.body.email, hash]
        db.query(sql, [values], (err, result) => {
            if(err) console.log(err);
            else return req.json(result)
        })
    })
})

app.listen(5000, () => {
    console.log("Listening")
})