import React from "react";
import styled from "styled-components";

import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  left: 0px;
  top: 0px;
  color: #ffffff;
  background: #303c6c;
  border-radius: 0px 20px 20px 0px;
`;

const DashBoard = styled.div`
  font-size: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 45px;
`;
const IconWrapper = styled.div`
  font-size: 30px;
  flex: 4;
`;

const Icon = styled.div`
  font-size: 24px;
  height: 44px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  padding-left: 45px;
  background-color: ${(props) =>
    props.type === "active" ? "rgb(255, 255, 255, 0.5)" : "inherit"};
`;
const LogOutIcon = styled.div`
  font-size: 24px;
  flex: 1;
`;

export default function SideBar() {
  return (
    <Container>
      <DashBoard>
        <RiDashboardLine />
      </DashBoard>
      <IconWrapper>
        <Icon>
          <AiOutlineHome />
        </Icon>
        <Icon type="active">
          <BsChatDots style={{ opacity: 1 }} />
        </Icon>
        <Icon>
          <FiSettings />
        </Icon>
      </IconWrapper>
      <Icon>
        <IoIosLogOut />
      </Icon>
    </Container>
  );
}
