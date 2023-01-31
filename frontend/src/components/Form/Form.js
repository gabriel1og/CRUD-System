import React, { useRef, useEffect } from "react";
import * as F from "./styles"
import axios from "axios";
import { toast } from "react-toastify";

export default function Form({ getUsers, onEdit, setOnEdit }) {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;
            user.data_nascimento.value = onEdit.data_nascimento;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.fone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800", {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
        user.data_nascimento.value = "";

        setOnEdit(null);
        getUsers();
    };

    return (
        <F.FormContainer ref={ref} onSubmit={handleSubmit}>
            <F.InputArea>
                <F.Label>Nome</F.Label>
                <F.Input name="nome" />
            </F.InputArea>
            <F.InputArea>
                <F.Label>E-mail</F.Label>
                <F.Input name="email" type="email" />
            </F.InputArea>
            <F.InputArea>
                <F.Label>Telefone</F.Label>
                <F.Input name="fone" />
            </F.InputArea>
            <F.InputArea>
                <F.Label>Data de Nascimento</F.Label>
                <F.Input name="data_nascimento" type="date" />
            </F.InputArea>

            <F.Button type="submit">SALVAR</F.Button>
        </F.FormContainer>
    )
}