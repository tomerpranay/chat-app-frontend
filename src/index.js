import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducer";
import ChatProvider from "./Context/ChatProvider";
const store = configureStore({
  reducer: rootReducer,
});



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>
);
