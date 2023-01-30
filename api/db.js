import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "BaCkEnD123!",
    database: "crud"
})