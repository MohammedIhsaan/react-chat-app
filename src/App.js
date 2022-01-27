import React, { createContext, useState } from "react";
import styled from "styled-components";
import ChatComponent from "./components/ChatComponent";
import SideBar from "./components/SideBar";

const Container = styled.div`
  display: flex;
`;

let userdata = [
  {
    id: 1,
    memberNmae: "Esther Howard",
    recentMsg: "Of course I can,...",
    count: null,
    time: "8:05 AM",
    status: true,
    msgHistory: [
      {
        sendMsg:
          "Hii Easther, glad to hear from you, I’m fine, What about you? and how it’s going with the velocity website? off cours, I’ll help with this project ",
        recievedMsg:
          "Hii Prakash ! Feels like it’s been a while! How are you? Do you have any time for the remainder of the week to help me with an ongoing project?",
      },
      {
        sendMsg:
          "Of course I can, just catching up with steve on it and I’ll write out. Speak tomorrow! Let me know if you have any questions!",
        recievedMsg:
          "Super, I’ll get you the new brief for our own site over to you this evening, so you have time to read over I’m good thank you!",
      },
    ],
  },
  {
    id: 2,
    memberNmae: "Marvin Mckinney",
    recentMsg: "That`s great!!",
    time: "1 min",
    count: 2,
    status: false,
    msgHistory: [
      { sendMsg: "send", recievedMsg: "go it" },
      { sendMsg: "send2", recievedMsg: "go it1" },
      { sendMsg: "send3", recievedMsg: "go it2" },
    ],
  },
  {
    id: 3,
    memberNmae: "Kathryn Murphy",
    recentMsg: "Counting yor slot...",
    time: "1 min",
    count: null,
    status: false,
  },
  {
    id: 4,
    memberNmae: "Floyd Miles",
    recentMsg: "Let me know...",
    time: "10 min",
    count: null,
    status: false,
  },
  {
    id: 5,
    memberNmae: "Albert Flores",
    recentMsg: "All faith needs feet...",
    time: "30 min",
    count: null,
    status: false,
  },
  {
    id: 6,
    memberNmae: "Brooklyn Simmons",
    recentMsg: "Glad to hear from you...",
    time: "2 Days",
    count: null,
    status: false,
  },
  {
    id: 7,
    memberNmae: "Kristin Watson",
    recentMsg: "Esther Howard",
    time: "5 Days",
    count: null,
    status: false,
  },
  {
    id: 8,
    memberNmae: "Annette Black",
    recentMsg: "Esther Howard",
    time: "1 Week",
    count: null,
    status: false,
  },
  {
    id: 9,
    memberNmae: "Savannah Nguyen",
    recentMsg: "Esther Howard",
    time: "2 Week",
    count: null,
    status: false,
  },
  {
    id: 10,
    memberNmae: "Robert Fox",
    recentMsg: "Sorry, I have network issue",
    count: null,
    time: "8:11 AM",
    status: true,
    msgHistory: [
      {
        sendMsg: "Hii, I’m Fine and what about you? ",
        recievedMsg: "Hello, Prakash How are you?",
      },
      {
        sendMsg: "Yaa, Sure",
        recievedMsg: "Hii, I’m also fine Can you join the metting?",
      },
      {
        sendMsg: "Sorry, I have network issue ",
        recievedMsg:
          "Why you leave the metting? Can you join the metting again?",
      },
    ],
  },
];

export const AppContext = createContext(null);

export default function App() {
  const [userNames, setuserName] = useState("Esther Howard");
  const [searchName, setsearchName] = useState("");
  const [data, setdata] = useState(userdata);
  const [hide, sethide] = useState(true);
  return (
    <AppContext.Provider
      value={{
        userNames,
        setuserName,
        data,
        setdata,
        searchName,
        setsearchName,
        userdata,
        hide,
        sethide,
      }}
    >
      <Container>
        <SideBar />
        <ChatComponent />
      </Container>
    </AppContext.Provider>
  );
}
