import React from "react";
import styled from "styled-components";
import { AiOutlineUnorderedList, AiOutlineDown } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import userImg from "../images/ihsaan.jpeg";
import { Mobile } from "../reponsive";

const Container = styled.div`
  height: 80px;
  display: flex;
  padding-top: 45px;
  padding-left: 30px;

  ${Mobile({
    display: "none",
  })}
`;
const LeftContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const SortBox = styled.div`
  display: flex;
`;
const SortIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  background: #f4f4f4;
  border-radius: 10px;
  cursor: pointer;
`;

const Span = styled.div`
  padding-top: 8px;
  font-size: 24px;
  font-weight: 400;
  padding-left: 10px;
`;
const UserDetails = styled.div`
  display: flex;
  width: 66%;
  justify-content: flex-end;
  padding-right: 67px;
`;

const DotDiv = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  right: 57px;
  bottom: 60px;
  background: #ef254a;
`;

const NotifyIcon = styled.div`
  font-size: 30px;
  padding-top: 5px;
  padding-right: 50px;
  position: relative;
  cursor: pointer;
`;
const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding-top: 5px;
  padding-right: 27px;
  padding-left: 20px;
  cursor: pointer;
`;
const DropIcon = styled.div`
  font-size: 15px;
  padding-top: 14px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <LeftContainer>
        <Title>Chat</Title>
        <SortBox>
          <SortIcon>
            <AiOutlineUnorderedList />
          </SortIcon>
          <Span>Sort</Span>
        </SortBox>
      </LeftContainer>
      <UserDetails>
        <NotifyIcon>
          <DotDiv />
          <IoIosNotificationsOutline />
        </NotifyIcon>
        <UserIcon>
          <Image src={userImg} />
        </UserIcon>
        <UserName>Prakash</UserName>
        <DropIcon>
          <AiOutlineDown />
        </DropIcon>
      </UserDetails>
    </Container>
  );
}
