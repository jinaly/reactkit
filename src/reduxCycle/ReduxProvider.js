import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const homeslice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    usersSuccess: (state, action) => {
      state.users = action.payload;
    },
    usersAddSuccess: (state, action) => {
      state.users = action.payload;
    },
    usersDeleteSuccess: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { usersSuccess, usersAddSuccess, usersDeleteSuccess } =
  homeslice.actions;

export const showTodo = (state) => state.users;

export default homeslice.reducer;

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:6001/list");
    dispatch(usersSuccess(res.data));
  } catch (e) {
    return console.error(e.message);
  }
};
export const addUsers = (data) => async (dispatch) => {
  try {
    const resData = await axios.post("http://localhost:6001/add", data);
    dispatch(usersAddSuccess(resData.data));
  } catch (e) {
    return console.error(e.message);
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    const resDel = await axios.delete(`http://localhost:6001/list/${id}`);
    dispatch(usersDeleteSuccess(resDel.data));
  } catch (e) {
    return console.error(e.message);
  }
};
