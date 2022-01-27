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
    recentMsg:
      "Of course I can, just catching up with steve on it and I’ll write out. Speak tomorrow! Let me know if you have any questions!",
    count: null,
    time: "8:05 AM",
    status: true,
  },
  {
    id: 2,
    memberNmae: "Marvin Mckinney",
    recentMsg: "That`s great!!",
    time: "1 min",
    count: 2,
    status: false,
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
];

export const AppContext = createContext(null);

export default function App() {
  const [userNames, setuserName] = useState("Esther Howard");
  const [searchName, setsearchName] = useState("");
  const [data, setdata] = useState(userdata);
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
      }}
    >
      <Container>
        <SideBar />
        <ChatComponent />
      </Container>
    </AppContext.Provider>
  );
}
