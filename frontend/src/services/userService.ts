import axios from "./axios";
import store from "store";

export const userLogin = async (payload: any) => {
  try {
    const response = await axios.post("auth/login", payload);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const userSignUp = async (payload: any) => {
  try {
    const response = await axios.post("auth/sign-up", payload);
    // console.log(response);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserForms = async () => {
  try {
    const user = store.get("USER") || undefined;
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const response = await axios.get(`user/form`, config);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};



