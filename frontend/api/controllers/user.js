import { db } from "../db.js";

export const getUsers = (_, res) => {
    const qry = "SELECT * FROM usuarios";

    db.query(qry, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUser = (req, res) => {
    const qry =
        "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(qry, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const qry =
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(qry, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const qry = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(qry, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};