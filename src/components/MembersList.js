import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Container = styled.div`
  padding-left: 30px;
`;
const SearchBox = styled.div`
  width: 400px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  height: 56px;
  font-size: 24px;
  padding-left: 22px;
  border: none;
`;
const Wrapper = styled.div`
  margin-top: 40px;
  /* margin-bottom: 50px; */
  padding-bottom: 50px;
  width: 400px;
  height: 55vh;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export default function MembersList() {
  return (
    <Container>
      <SearchBox>
        <IoIosSearch style={{ fontSize: "26px", paddingLeft: "22px" }} />
        <Input placeholder="Search" />
      </SearchBox>
      <Wrapper></Wrapper>
    </Container>
  );
}
