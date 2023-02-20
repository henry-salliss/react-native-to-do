import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsUrgent } from "../store/sessionSlice";

const Urgent = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.session.task);
  const isUrgent = useSelector((state) => state.session.isUrgent);

  return (
    <View>
      <Text>Is {task} an urgent task?</Text>
      <Button title="Yes" onPress={() => dispatch(setIsUrgent(true))} />
      <Button title="No" onPress={() => dispatch(setIsUrgent(false))} />

      {isUrgent && <Text>This task is urgent</Text>}
      {!isUrgent && <Text>This task is not urgent</Text>}
    </View>
  );
};

export default Urgent;
