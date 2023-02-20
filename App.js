import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Hello from "./components/Hello";

export default function App() {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
}
