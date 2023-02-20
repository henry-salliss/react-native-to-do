import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: "",
  taskDone: null,
  started: null,
  isUrgent: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload;
    },
    setTaskDone(state, action) {
      state.taskDone = action.payload;
    },
    setStarted(state, action) {
      state.started = action.payload;
    },
    setIsUrgent(state, action) {
      state.isUrgent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStarted, setTask, setTaskDone, setIsUrgent } =
  sessionSlice.actions;

export default sessionSlice.reducer;
