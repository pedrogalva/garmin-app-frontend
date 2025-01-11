import { Box } from "@mui/material";
import React from "react";
import "./App.css";

import UsersTable from "../components/user/UsersTable.tsx";
import Header from "../components/header/index.tsx";

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
  return (
    <Box sx={{ maxWidth: 800, margin: "80px auto" }} component="section">
      <Header
        title={"Garmin-Bora App"}
        subtitle={
          "Esse app tem como finalidade atualizar os treinos criados pela boradentro do site da Garmin"
        }
      />
      <UsersTable users={users} />
    </Box>
  );
};

export default App;
