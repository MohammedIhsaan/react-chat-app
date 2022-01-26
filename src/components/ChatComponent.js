import React from "react";

import styled from "styled-components";
import { Mobile } from "../reponsive";
import Header from "./Header";
import MainCotainer from "./MainCotainer";

const Container = styled.div`
  width: 1290px;
  height: 1024px;

  ${Mobile({
    borderRadius: "0px",
    width: "375px",
    height: "0",
  })}
`;

export default function ChatComponent() {
  return (
    <Container>
      <Header />
      <MainCotainer />
    </Container>
  );
}
