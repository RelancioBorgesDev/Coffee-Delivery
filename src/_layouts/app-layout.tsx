import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
