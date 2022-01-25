import React from "react";
import styled from "styled-components";
import ActiveChatRoom from "./ActiveChatRoom";
import MembersList from "./MembersList";

const Container = styled.div`
  display: flex;
`;

export default function MainCotainer() {
  return (
    <Container>
      <MembersList />
      <ActiveChatRoom />
    </Container>
  );
}
