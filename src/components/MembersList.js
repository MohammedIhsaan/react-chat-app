import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import MyImg from "../images/ihsaan.jpeg";
import { Desktop2, Mobile } from "../reponsive";
import { AppContext } from "../App";

const Container = styled.div`
  padding-left: 30px;
  ${Mobile({
    // display: "none",
    display: (props) => (props.type ? "none" : ""),
    padding: "5px 0px 0px 5px",
  })}
`;
const SearchBox = styled.div`
  width: 400px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  display: flex;
  align-items: center;
  ${Mobile({
    marginTop: "10px",
    width: "400px",
  })}
`;
const Input = styled.input`
  height: 56px;
  font-size: 24px;
  padding-left: 22px;
  border: none;

  :focus-visible {
    outline: none;
  }
`;
const Wrapper = styled.div`
  margin-top: 40px;
  /* margin-bottom: 50px; */
  padding-bottom: 50px;
  width: 400px;
  height: 717px;
  /* height: 52vh; */
  ${Desktop2({
    height: "52vh",
  })}
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 2.5px;
    height: 0px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #303c6c;
  }
  ${Mobile({
    marginTop: "10px",
    width: "400px",
    height: "80vh",
  })}
`;
const AllMember = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Left = styled.div`
  flex: 1;
`;

const ImgDiv = styled.div`
  position: relative;
`;
const DotDiv = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  right: 20px;
  bottom: 20px;
  background: #6fcf97;

  display: ${(props) => props.type || "none"};
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
  const {
    setuserName,
    data,
    setdata,
    setsearchName,
    searchName,
    userdata,
    hide,
    sethide,
  } = useContext(AppContext);

  const handelClick = (e) => {
    setuserName(e);
    sethide(true);
  };
  const handleChange = (e) => {
    setsearchName(e.target.value);
  };

  useEffect(() => {
    let res = userdata.filter(
      (obj) =>
        obj.memberNmae.substr(0, searchName.length).toUpperCase() ==
        searchName.toUpperCase()
    );
    // if(res.length){
    //   setdata(userdata)
    // }
    setdata(res);
    if (searchName.length === 0) {
      setdata(userdata);
    }

    // console.log("res", res);
  }, [searchName]);

  return (
    <Container type={hide}>
      <SearchBox>
        <IoIosSearch style={{ fontSize: "26px", paddingLeft: "22px" }} />
        <Input placeholder="Search" onChange={handleChange} />
      </SearchBox>
      <Wrapper>
        {data.map((obj) => {
          return (
            <>
              <>
                <AllMember
                  key={obj.id}
                  onClick={() => handelClick(obj?.memberNmae)}
                >
                  <Left>
                    <ImgDiv>
                      <DotDiv type={obj.status} />
                      <MemberImg src={MyImg} />
                    </ImgDiv>
                  </Left>
                  <Middel>
                    <MemberName>{obj?.memberNmae}</MemberName>
                    <LastMsg>
                      {obj.recentMsg?.split(" ").length > 10
                        ? obj.recentMsg?.substr(0, 30)
                        : obj?.recentMsg}
                    </LastMsg>
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
