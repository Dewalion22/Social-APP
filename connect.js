import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fadel123",
    port:3309,
    database:"social",

})


