import React from "react";
import BottomMenu from "../../components/BottomMenu";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";
import SimpleSnackbar from "../../components/Snackbar/Snackbar";

export default function PeriodCalendar() {
  return (
    <>
      <Header title="Calendário" />

      <Calendar />
      <BottomMenu />
      <SimpleSnackbar/>
    </>
  );
}
