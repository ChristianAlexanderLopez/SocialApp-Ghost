import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // ChakraProvider
import "./index.css";
import App from "./App";
import Parse from "parse";

// Parse
const PARSE_APPLICATION_ID = "uWsLe4oiQWJU5p63sgCCJjNqPIFYOglDYulwufXy";
const PARSE_JAVASCRIPT_KEY = "ZzHI2Aco2KV01ZmcSsQvDtCbijKcI48fqdRhujJy";
const PARSE_MASTER_KEY = "XRKgv35VfEEokHdV0i9qo4bcXAmbRPQPwswRn3rU";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY, PARSE_MASTER_KEY);
Parse.serverURL = PARSE_HOST_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
