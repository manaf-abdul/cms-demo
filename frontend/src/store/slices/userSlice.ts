import { createSlice } from "@reduxjs/toolkit";
// import dayjs from "dayjs";
import store from "store";
// import expirePlugin from "store/plugins/expire";

// store.addPlugin(expirePlugin);

const USER_KEY = "USER";

// Define a type for the slice state
interface UserState {
  email: string;
  // phone: string;
  // name: string;
  // accessToken: string | undefined;
  // userType: string;
}

const existingUser = store.get(USER_KEY) || undefined;

// Define the initial state using that type
const initialState: UserState = {
  email: existingUser?.email || "",
  // phone: existingUser?.phone || "",
  // accessToken: existingUser?.accessToken || "",
  // name: existingUser?.name || "",
  // userType: existingUser?.userType || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      // state.phone = payload.phone;
      // state.accessToken = payload.accessToken;
      // state.name = payload.name;
      // state.userType = payload.userType;
      store.set(USER_KEY, payload);
    },
    removeUser: (state) => {
      state.email = "";
      // state.phone = "";
      // state.accessToken = "";
      // state.name = "";
      // state.userType = "";

      store.remove(USER_KEY);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
