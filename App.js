import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Intro from "./components/Intro";
import AppIntro from "./components/AppIntro";

export default function App() {
  return (
    <Provider store={store}>
      <Intro />
      {/* <AppIntro /> */}
    </Provider>
  );
}
