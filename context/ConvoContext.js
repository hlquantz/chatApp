//TODO: Setup context to remember name of user and bot that are talking
import { createContext, useReducer } from "react";

export const messages = createContext([
  {
    id: Date.toString() + Math.random.toString(),
    content: "TEST",
    sent: false,
  },
]);

function ConvoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, messages);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_MESSAGE":
        const newMessage = {
          id: Date.toString() + Math.random.toString(),
          content: action.newMessage,
          sent: action.isSent,
        };
        console.log(newMessage);
        return {
          ...state,
          newMessage,
        };

      default:
        break;
    }
  }

  function addMessage(e) {
    dispatch({
      type: "ADD_MESSAGE",
      newMessage: e,
    });
  }

  const value = {
    messages: messages,
    addMessage: addMessage,
  };

  return <messages.Provider value={value}>{children}</messages.Provider>;
}

export default ConvoContextProvider;
