import React from "react";
import BottomMenu from "../../components/BottomMenu";
import Header from "../../components/Header";
import PointsCard from "../../components/PointsCard";
import PointsDashboard from "../../components/PointsDashboard";

export default function Points() {
  return (
    <>
      <Header title="Clube Kira" />
      <div style={{ padding: 16 }}>
        <PointsCard />
      </div>

      <PointsDashboard />
      <BottomMenu />
    </>
  );
}
