import React from "react";
import BottomMenu from "../../components/BottomMenu";
import Header from "../../components/Header";
import PeriodForm from "../../components/PeriodForm";

export default function Register() {
  return (
    <>
      <Header title="Calendário" />
      <PeriodForm />
      <BottomMenu />
    </>
  );
}
