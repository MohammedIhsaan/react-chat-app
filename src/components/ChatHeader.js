import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import UserImg from "../images/ihsaan.jpeg";
import { Mobile } from "../reponsive";
import { AppContext } from "../App";

const Container = styled.div`
  /* ${Mobile({
    display: "flex",
  })} */
`;
const MobileHeader = styled.div`
  display: none;
  color: #ffffff;
  align-items: center;
  ${Mobile({
    display: "flex",
    height: "50px",
    background: "#303c6c",
  })}
`;
const Icon = styled.div`
  flex: 1;
  font-size: 18px;
  padding-left: 23px;
  cursor: pointer;
`;
const Title = styled.div`
  flex: 1.7;
  font-weight: 500;
  font-size: 18px;
  /* text-align: center; */

  color: #ffffff;
`;

const Header = styled.div`
  width: 100%;
  color: #ffffff;
  height: 80px;
  background: #303c6c;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-between;

  ${Mobile({
    borderRadius: "0px",
    // width: "90%",
    background: "#ffffff",
    color: "#3C3C3C",
    height: "50px",
  })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
  ${Mobile({
    paddingLeft: "20px",
  })}
`;
const UserIcon = styled.div`
  padding-right: 20px;
  display: flex;
`;
const BackArrow = styled.div`
  display: none;
  align-items: center;
  padding-right: 10px;
  cursor: pointer;
  ${Mobile({
    display: "flex",
    fontSize: "20px",
  })}
`;
const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  ${Mobile({
    width: "40px",
    height: "40px",
  })}
`;
const UserName = styled.div`
  /* font-size: 40px; */
`;
const ImgDiv = styled.div`
  position: relative;
`;
const DotDiv = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  right: 4px;
  bottom: 10px;
  background: #6fcf97;
  display: ${(props) => props.type || "none"};
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  ${Mobile({
    fontSize: "16px",
    fontWeight: "500",
  })}
`;
const Status = styled.div`
  display: none;
  font-weight: normal;
  font-size: 12px;
  ${Mobile({
    display: "flex",
  })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  padding-right: 37px;
  ${Mobile({
    paddingRight: "0px",
  })}
`;
const MenuIcon = styled.div`
  font-size: 24px;
  padding-right: 20px;
  cursor: pointer;
`;
const CloseIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  ${Mobile({
    display: "none",
  })}
`;

const Line = styled.hr`
  border: 1px solid #e6e6e6;
`;

export default function ChatHeader() {
  const { userNames, userdata, sethide } = useContext(AppContext);
  const [active, setactive, hide] = useState(null);

  const handleClick = () => {
    console.log("clicked");
    sethide(false);
  };

  useEffect(() => {
    let res = userdata.filter((obj) => obj.memberNmae === userNames);
    setactive(res[0].status);
  }, [userNames]);

  return (
    <Container>
      <MobileHeader>
        <Icon>
          <RiMenu4Fill />
        </Icon>
        <Title>Messages</Title>
      </MobileHeader>
      <Header>
        <Left>
          <UserIcon>
            <BackArrow onClick={handleClick}>
              <IoMdArrowBack />
            </BackArrow>
            <ImgDiv>
              <DotDiv type={active} />
              <UserImage src={UserImg} />
            </ImgDiv>
          </UserIcon>
          <UserName>
            <Name>{userNames}</Name>
            <Status>Online</Status>
          </UserName>
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
      <Line />
    </Container>
  );
}
