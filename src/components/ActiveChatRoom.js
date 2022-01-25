import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";

const Container = styled.div`
  margin-left: 30px;
  width: 850px;
  height: 76vh;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
`;

export default function ActiveChatRoom() {
  return (
    <Container>
      <ChatHeader />
      <ChatRoom />
    </Container>
  );
}
