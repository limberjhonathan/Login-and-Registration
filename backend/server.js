import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const saltRounds = 10; // Definindo o número de rounds para o bcrypt

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db'
});

// Rota de registro
app.post("/register", (req, res) => {
    const sql = "INSERT INTO usuarios (username, email, password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => { 
        if (err) return res.json({ Error: "Error" });
        const values = [req.body.username, req.body.email, hash];
        db.query(sql, [values], (err, result) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Error" }); 
            } else {
                return res.json({ Success: "User registered successfully" });
            }
        });
    });
});

// Rota de login
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    db.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Error: "Error" });
        if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err) return res.json({ Error: "Error" });
                if (response) return res.json({ Status: "Success" });
                else return res.json({ Error: "Wrong password" });
            });
        } else {
            return res.json({ Error: "Email not existing" });
        }
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
