import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../App";
import { Desktop2, Mobile } from "../reponsive";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";

const Container = styled.div`
  margin-left: 30px;
  margin-right: 50px;
  width: 780px;
  height: 860px;
  /* height: 75.5vh; */

  ${Desktop2({
    height: "75.5vh",
  })}
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
  ${Mobile({
    marginLeft: "0px",
    marginRight: "0px",
    borderRadius: "0px",
    width: "100%",
    height: "100vh",
    display: (props) => (props.type ? "" : "none"),
  })}
  ${Desktop2({
    width: "100%",
    // width: "65%",
  })};
`;

export default function ActiveChatRoom() {
  const { hide } = useContext(AppContext);
  return (
    <Container type={hide}>
      <ChatHeader />
      <ChatRoom />
    </Container>
  );
}
