import React from "react";

import styled from "styled-components";
import { Desktop2, Mobile, Mobile375 } from "../reponsive";
import Header from "./Header";
import MainCotainer from "./MainCotainer";

const Container = styled.div`
  width: 1290px;
  /* height: 1024px; */
  height: 100vh;

  ${Desktop2({
    borderRadius: "0px",
    width: "1250px",
    height: "0",
  })};
  ${Mobile({
    borderRadius: "0px",
    width: "420px",
    height: "0",
  })};

  ${Mobile375({
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
