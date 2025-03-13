import React from "react";
import { Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { HomePage, PersonalAccount } from "./pages";

import "./app.module.css";

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personalAccount" element={<PersonalAccount/>}/>
      </Routes>
    </QueryClientProvider>
  );
};
