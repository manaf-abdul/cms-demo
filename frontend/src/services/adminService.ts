import axios from "./axios";

export const editFormVisbility = async (payload: any) => {
  try {
    const response = await axios.put("form", payload);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editFormFlow = async (payload: any) => {
  try {
    const response = await axios.post("app", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForms = async () => {
  try {
    const response = await axios.get("app");
    // console.log(response);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getFormById = async (formId: string | undefined) => {
  try {
    const response = await axios.get(`form/${formId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
