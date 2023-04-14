import usersReducer from "./UsersDetailSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: usersReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectUsers = (state: RootState) => state.users;
export const selectFilteredUsers = (state: RootState) => state.filteredUsers;
export const getUsersStatus = (state: RootState) => state.status;
