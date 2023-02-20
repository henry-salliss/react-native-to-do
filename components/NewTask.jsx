import { Text, View, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setTask, setTaskDone } from "../store/sessionSlice";
import Urgent from "./Urgent";

const NewTask = () => {
  const dispatch = useDispatch();
  const taskDone = useSelector((state) => state.session.taskDone);
  const task = useSelector((state) => state.session.task);
  return (
    <View>
      <Text>What task needs doing today?</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here"
        onChangeText={(newText) => dispatch(setTask(newText))}
        value={task}
      />
      <Button title="Add task" onPress={() => dispatch(setTaskDone(true))} />
      {taskDone && <Urgent task={task} />}
    </View>
  );
};

export default NewTask;
