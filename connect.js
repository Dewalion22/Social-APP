import mysql from "mysql"

export const db = mysql.createConnection({
    connectionLimit : 10,
    host:"202.73.26.166",
    user:"socialap_fadel",
    password:"fadel202020",
    port:3306,
    database:"socialap_social-apps",

});


