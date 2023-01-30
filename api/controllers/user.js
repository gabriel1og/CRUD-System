import { db } from "../db.js";

export const getUsers = (_, res) => {
    const qry = "SELECT * FROM usuarios";

    db.query(qry, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}