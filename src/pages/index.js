import React from "react";
import styled from "styled-components";
import Card from "../shared/Card/";
import ProfileHeader from "../shared/ProfileHeader";

export const Container = styled.div`
  background-color: #ecf1f4;
  width: 400px;
  padding: 16px;
  margin: auto;
`;

export default function Home() {
  return (
    <>
      <Container>
        <ProfileHeader />
        <Card />
      </Container>
    </>
  );
}
