import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import MyImg from "../images/ihsaan.jpeg";

let data = [
  {
    id: 1,
    memberNmae: "Esther Howard",
    recentMsg: "of course I can,..",
    count: null,
  },
  {
    id: 2,
    memberNmae: "Marvin Mckinney",
    recentMsg: "That`s great!!",
    time: "1 min",
    count: 2,
  },
  {
    id: 3,
    memberNmae: "Kathryn Murphy",
    recentMsg: "Counting yor slot...",
    time: "1 min",
    count: null,
  },
  {
    id: 4,
    memberNmae: "Floyd Miles",
    recentMsg: "Let me know...",
    time: "10 min",
    count: null,
  },
  {
    id: 5,
    memberNmae: "Albert Flores",
    recentMsg: "All faith needs feet...",
    time: "30 min",
    count: null,
  },
  {
    id: 6,
    memberNmae: "Brooklyn Simmons",
    recentMsg: "Glad to hear from you...",
    time: "2 Days",
    count: null,
  },
  {
    id: 7,
    memberNmae: "Kristin Watson",
    recentMsg: "Esther Howard",
    time: "5 Days",
    count: null,
  },
  {
    id: 8,
    memberNmae: "Annette Black",
    recentMsg: "Esther Howard",
    time: "1 Week",
    count: null,
  },
  {
    id: 9,
    memberNmae: "Savannah Nguyen",
    recentMsg: "Esther Howard",
    time: "2 Week",
    count: null,
  },
];

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
  height: 717px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
const AllMember = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
`;
const MemberImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 15px 20px 0 20px;
`;
const Middel = styled.div`
  flex: 4;
`;
const MemberName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #3c3c3c;
`;
const LastMsg = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ababab;
`;
const Right = styled.div`
  flex: 1;
`;
const Time = styled.div`
  font-weight: normal;
  font-size: 12px;

  color: #ababab;
`;
const MsgCount = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* background: #fa976c; */
  background: ${(props) => (props.type === null ? "white" : "#fa976c")};

  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  color: #ffffff;
`;
const Line = styled.hr`
  border: 1px solid #e6e6e6;
`;

export default function MembersList() {
  return (
    <Container>
      <SearchBox>
        <IoIosSearch style={{ fontSize: "26px", paddingLeft: "22px" }} />
        <Input placeholder="Search" />
      </SearchBox>
      <Wrapper>
        {data.map((obj) => {
          return (
            <>
              <>
                <AllMember>
                  <Left>
                    <MemberImg src={MyImg} />
                  </Left>
                  <Middel>
                    <MemberName>{obj.memberNmae}</MemberName>
                    <LastMsg>{obj.recentMsg}</LastMsg>
                  </Middel>
                  <Right>
                    <Time>{obj.time ? obj.time : ""}</Time>
                    <MsgCount type={obj.count}>
                      {obj.count ? obj.count : ""}
                    </MsgCount>
                  </Right>
                </AllMember>
              </>
              <Line />
            </>
          );
        })}
      </Wrapper>
    </Container>
  );
}
