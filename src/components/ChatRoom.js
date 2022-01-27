import React, { useContext } from "react";
import styled from "styled-components";
import { ImAttachment } from "react-icons/im";
import { FiSend } from "react-icons/fi";

import Img from "../images/ihsaan.jpeg";
import { Desktop2, Mobile } from "../reponsive";
import { AppContext } from "../App";

const Container = styled.div`
  /* border: 1px solid blue; */
  height: 65vh;
  ${Desktop2({
    height: "65vh,",
  })}
`;
const Day = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #bbbbbb;
  padding-top: 24px;
  padding-bottom: 24px;
  ${Mobile({
    fontSize: "12px",
    paddingTop: "16px",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MsgBox = styled.div`
  /* border: 1px solid green; */
  /* height: 88%; */
  height: 92%;
  ${Desktop2({
    height: "75%",
  })}
  display: flex;
  flex-direction: column;
  ${Mobile({
    // width: "281px",
    // height: "100%",
    paddingRight: "20px",
  })}
`;
const MsgDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 13px 10px;
  width: 385px;
  background: rgba(180, 223, 229, 0.5);
  border-radius: 20px 0px 10px 20px;
  ${Mobile({
    width: "80%",
    // height: "100%",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px 0px",
  })}
`;

const Msg = styled.div`
  font-size: 16px;
  letter-spacing: -0.02em;
  font-weight: normal;
  color: #3c3c3c;
`;
const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  opacity: 0.5;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0px 20px;
  ${Mobile({
    display: "none",
  })}
`;
const InputBox = styled.div`
  height: 90px;
  display: flex;
  /* border: 1px solid red; */
  margin-bottom: 30px;
  ${Mobile({})}
`;
const InputWrap = styled.div`
  display: flex;
  width: 650px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 20px;
  z-index: 2;

  ${Mobile({
    width: "75%",
    height: "44px",
    marginRight: "10px",
    marginLeft: "20px",
  })}
  ${Desktop2({
    width: "80%",
  })}
`;
const Input = styled.textarea`
  border: none;
  width: 100%;
  height: 55px;
  border-radius: 10px;
  padding-left: 20px;
  resize: none;
  z-index: 1;
  ::placeholder {
    line-height: 50px;
  }
  :focus-visible {
    ::placeholder {
      color: transparent;
    }
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 2.5px;
    height: 0px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #303c6c;
  }

  ${Mobile({
    width: "100%",
    height: "40px",
  })}

  @media only screen and (max-width:420px) {
    ::placeholder {
      line-height: 40px;
    }
  }
`;
const AttachIcon = styled.div`
  font-size: 28px;
  padding-right: 23px;
  padding-left: 23px;
  cursor: pointer;
  ${Mobile({
    fontSize: "22px",
  })}
`;
const SendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 30px;
  background: #c4c4c4;
  cursor: pointer;
  ${Mobile({
    width: "44px",
    height: "44px",
    fontSize: "24px",
  })}
`;

export default function ChatRoom() {
  const { data, userNames } = useContext(AppContext);

  console.log(userNames);
  let userObj = data.filter((obj) => obj.memberNmae === userNames);

  return (
    <Container>
      <MsgBox>
        <Day>Today</Day>
        <Wrapper>
          <MsgDetails>
            <Msg>{userObj[0]?.recentMsg}</Msg>
            <Time>8:05 AM</Time>
          </MsgDetails>
          <UserImg src={Img} />
        </Wrapper>
      </MsgBox>
      <InputBox>
        <InputWrap>
          <Input placeholder="Write a message" />
          <AttachIcon>
            <ImAttachment />
          </AttachIcon>
        </InputWrap>
        <SendIcon>
          <FiSend />
        </SendIcon>
      </InputBox>
    </Container>
  );
}
