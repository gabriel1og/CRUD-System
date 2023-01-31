import React from "react";
import * as F from "./styles"

export default function Form() {
    return (
        <F.FormContainer>
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