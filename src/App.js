import React from "react";
import styled from "styled-components";
import ChatComponent from "./components/ChatComponent";
import SideBar from "./components/SideBar";

const Container = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <Container>
      <SideBar />
      <ChatComponent />
    </Container>
  );
}
