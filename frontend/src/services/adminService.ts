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

export const editTarget = async (data: any) => {
  try {
    // const user = store.get("USER") || undefined;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${user.accessToken}`,
    //   },
    // };
    const response = await axios.put(`form/edit-target`, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEdge = async (data: any) => {
  try {
    // const user = store.get("USER") || undefined;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${user.accessToken}`,
    //   },
    // };
    const response = await axios.put(`form/delete-target`, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};