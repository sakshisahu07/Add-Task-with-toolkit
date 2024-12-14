


// import { createSlice } from "@reduxjs/toolkit";
// const taskSlice=createSlice({
//     name:"task",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,actions)=>{
//             state.task.push(actions.payload);
//         }
//     }
// })
// export default taskSlice.reducer;
// export const {addTask}=taskSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [], // Initialize as an empty array
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
