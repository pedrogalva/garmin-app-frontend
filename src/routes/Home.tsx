import { Box, Button } from "@mui/material";
import React from "react";
import "./App.css";
import useAxios from "axios-hooks";

import UsersTable from "../components/user/UsersTable.tsx";
import Header from "../components/header/index.tsx";
import { filledButtonSx } from "../components/_style/button.tsx";

const users = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "galvanipedr11@gmail.com",
    birthday: "01/01/2000",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "pero@pero.com",
    birthday: "01/01/2000",
  },
];

const App = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?delay=1"
  );

  return (
    <Box sx={{ maxWidth: 800, margin: "80px auto" }} component="section">
      <Header
        title={"Garmin-Bora App"}
        subtitle={
          "Esse app tem como finalidade atualizar os treinos criados pela boradentro do site da Garmin"
        }
      />
      <Button variant="contained" sx={filledButtonSx} onClick={() => {}}>
        CADASTRAR USUÁRIO
      </Button>
      <UsersTable users={users} />
    </Box>
  );
};

export default App;
