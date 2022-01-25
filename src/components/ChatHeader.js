import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import UserImg from "../images/ihsaan.jpeg";

const Header = styled.div`
  width: 850px;
  color: #ffffff;
  height: 80px;
  background: #303c6c;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`;
const UserIcon = styled.div`
  padding-right: 20px;
`;
const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
const UserName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  padding-right: 37px;
`;
const MenuIcon = styled.div`
  font-size: 24px;
  padding-right: 20px;
`;
const CloseIcon = styled.div`
  font-size: 24px;
`;

export default function ChatHeader() {
  return (
    <Header>
      <Left>
        <UserIcon>
          <UserImage src={UserImg} />
        </UserIcon>
        <UserName>Eshter Howard</UserName>
      </Left>
      <Right>
        <MenuIcon>
          <BsThreeDotsVertical />
        </MenuIcon>
        <CloseIcon>
          <AiOutlineClose />
        </CloseIcon>
      </Right>
    </Header>
  );
}
