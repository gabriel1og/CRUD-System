import React from "react";
import * as G from "./styles";

export default function Grid() {

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

      </G.Tbody>
    </G.Table>
  );
};