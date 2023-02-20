import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setStarted } from "../store/sessionSlice";
import NewTask from "./NewTask";

const Intro = () => {
  const started = useSelector((state) => state.session.started);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {!started && (
        <>
          <Text>Time to sort your day out!</Text>
          <Button
            title="Get Started"
            onPress={() => dispatch(setStarted(true))}
          />
          <StatusBar style="auto" />
        </>
      )}

      {started && <NewTask />}
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

export default Intro;
