import React from "react";
import styled from "styled-components";
import { ImAttachment } from "react-icons/im";
import { FiSend } from "react-icons/fi";

import Img from "../images/ihsaan.jpeg";
import { Mobile } from "../reponsive";

const Container = styled.div`
  /* border: 1px solid blue; */
  height: 90%;
  ${Mobile({
    // marginLeft: "0px",
    // marginRight: "0px",
    // borderRadius: "0px",
    // width: "50%",
  })}
`;
const Day = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: #bbbbbb;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MsgBox = styled.div`
  /* border: 1px solid green; */
  height: 88%;
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
  height: 100px;
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
  height: 90px;
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
  ${Mobile({
    width: "281px",
    height: "44px",
    marginRight: "10px",
    marginLeft: "20px",
  })}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  height: 55px;
  border-radius: 10px;
  padding-left: 20px;

  ${Mobile({
    width: "100%",
    height: "40px",
  })}
`;
const AttachIcon = styled.div`
  font-size: 28px;
  padding-right: 23px;
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
  ${Mobile({
    width: "44px",
    height: "44px",
    fontSize: "24px",
  })}
`;

export default function ChatRoom() {
  return (
    <Container>
      <MsgBox>
        <Day>Today</Day>
        <Wrapper>
          <MsgDetails>
            <Msg>
              Of course I can, just catching up with steve on it and I’ll write
              out. Speak tomorrow! Let me know if you have any questions!
            </Msg>
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
