import React from "react";

import styled from "styled-components";
import Header from "./Header";
import MainCotainer from "./MainCotainer";

const Container = styled.div`
  /* border: 1px solid blue; */
  width: 1290px;
  /* width: 80%; */
  height: 1024px;
`;

export default function ChatComponent() {
  return (
    <Container>
      <Header />
      <MainCotainer />
    </Container>
  );
}
