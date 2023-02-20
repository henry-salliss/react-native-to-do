import React from "react";
import { StatusBar } from "expo-status-bar";
// import { View, Text, StyleSheet } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

const Hello = () => {
  const value = useSelector((state) => state.counter.value);
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  console.log(session);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{value}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Hello;
