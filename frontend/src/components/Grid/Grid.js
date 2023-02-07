import React from "react";
import axios from "axios"
import { toast } from "react-toastify";
import * as G from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Grid({ users, setUsers, setOnEdit }) {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <G.Table>
      <G.Thead>
        <G.Tr>
          <G.Th>Nome</G.Th>
          <G.Th>Email</G.Th>
          <G.Th onlyWeb>Fone</G.Th>
          <G.Th></G.Th>
          <G.Th></G.Th>
        </G.Tr>
      </G.Thead>
      <G.Tbody>
        {users.map((user, i) => {
          return (
            <G.Tr key={i}>
              <G.Td width="25%">{user.nome}</G.Td>
              <G.Td width="35%">{user.email}</G.Td>
              <G.Td width="20%" onlyWeb>
                {user.fone}
              </G.Td>
              <G.Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(user)} cursor="pointer" />
              </G.Td>
              <G.Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(user.id)} cursor="pointer" />
              </G.Td>
            </G.Tr>
          )
        })}
      </G.Tbody>
    </G.Table>
  );
};