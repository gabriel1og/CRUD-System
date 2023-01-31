import React from "react";
import * as G from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Grid({ users }) {

  return (
    <G.Table>
      <G.Thead>
        <G.Tr>
          <G.Th>Nome</G.Th>
          <G.Th>Email</G.Th>
          <G.Th onlyWeb>Fone</G.Th>
          <G.Th>Data de Nascimento</G.Th>
          <G.Th></G.Th>
        </G.Tr>
      </G.Thead>
      <G.Tbody>
        {users.map((user, i) => {
          <G.Tr key={i}>
            <G.Td width="30%">{user.nome}</G.Td>
            <G.Td width="30%">{user.email}</G.Td>
            <G.Td width="20%" onlyWeb>
              {user.fone}
            </G.Td>
            <G.Td alignCenter width="5%">
              <FaEdit />
            </G.Td>
            <G.Td alignCenter width="5%">
              <FaTrash />
            </G.Td>
          </G.Tr>
        })}
      </G.Tbody>
    </G.Table>
  );
};