//TODO: Setup context to remember name of user and bot that are talking
import { createContext, useReducer, useState } from "react";

const DATA = [
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST1",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST2",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST3",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST4",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content: "TEST5",
    sent: true,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sent: false,
  },
  {
    id: Date.toString() + Math.random().toString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sent: true,
  },
];

export const messages = createContext({
  id: Date.toString() + Math.random.toString(),
  content: "",
  sent: false,
});

// function newMessage() {
//   const newMessage = {
//     id: Date.toString() + Math.random().toString(),
//     content: "",
//     sent: true,
//   };
// }
function ConvoConextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, messages);

  const value = {
    message: content,
    sent: sent,
    id: id,
  };

  return <messages.Provider value={value}>{children}</messages.Provider>;
}

export default ConvoConextProvider;
