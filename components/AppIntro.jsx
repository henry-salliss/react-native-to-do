import { Text, View, StatusBar, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setStarted } from "../store/sessionSlice";
// import NewTask from "./NewTask";
import store from "../store/store";

const AppIntro = () => {
  //   const dispatch = useDispatch();
  //   const started = useSelector((state) => state.session.started);
  //   const session = useSelector((state) => state.session);
  //   console.log("this is the session: ", session);
  return (
    // <View style={styles.container}>
    //   {!started && (
    //     <>
    //       <Text>Time to sort your day out!</Text>
    //       <Button
    //         title="Get Started"
    //         onPress={() => dispatch(setStarted(true))}
    //       />
    //       <StatusBar style="auto" />
    //     </>
    //   )}

    //   {/* {started && <NewTask />} */}
    // </View>
    <Text>test</Text>
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

export default AppIntro;
