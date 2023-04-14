import axios from "axios";
import { User, SearchUserBy } from "../types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const URL = "https://randomuser.me/api/?results=10";

type UsersState = {
  users: User[];
  filteredUsers: User[];
  status: "loading" | "failed" | "succeeded";
};

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  status: "loading",
};

const parseData = (results: any) => {
  return results.map((user: any) => {
    return {
      name: {
        first: user.name.first,
        last: user.name.last,
        title: user.name.title,
      },
      location: {
        city: user.location.city,
        country: user.location.country,
        street: {
          name: user.location.street.name,
          number: user.location.street.number.toString(),
        },
      },
      email: user.email,
      uuid: user.login.uuid,
      picture: user.picture.medium,
    };
  });
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(URL);
  const results = response?.data?.results;
  return parseData(results);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser(state, action: PayloadAction<User>) {
      state.users = state.users?.map((user) =>
        user.uuid === action.payload.uuid ? { ...action.payload } : user
      );
    },
    addUser(state, action: PayloadAction<User>) {
      state.users?.push(action.payload);
    },
    removeUser(state, action: PayloadAction<User>) {
      state.users = state.users?.filter(
        (user) => user.uuid !== action.payload.uuid
      );
    },

    searchUserBy(state, action: PayloadAction<SearchUserBy>) {
      switch (action.payload.searchBy) {
        case "Name":
          state.filteredUsers = state.users?.filter((user) =>
            (
              user.name.first.toLowerCase() ||
              user.name.last.toLowerCase() ||
              user.name.title.toLowerCase()
            ).includes(action.payload.value.toLowerCase())
          );
          break;
        case "Location":
          state.filteredUsers = state.users?.filter((user) =>
            (
              user.location.country.toLowerCase() ||
              user.location.city.toLowerCase() ||
              user.location.street.name.toLowerCase()
            ).includes(action.payload.value.toLowerCase())
          );
          break;

        case "Email":
          state.filteredUsers = state.users?.filter((user) =>
            user.email
              .toLowerCase()
              .includes(action.payload.value.toLowerCase())
          );
          break;

        case "Id":
          state.filteredUsers = state.users?.filter((user) =>
            user.uuid.toLowerCase().includes(action.payload.value.toLowerCase())
          );
          break;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!state.users.length) {
          state.users = action.payload;
        }
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const { editUser, removeUser, addUser, searchUserBy } =
  usersSlice.actions;

export default usersSlice.reducer;
