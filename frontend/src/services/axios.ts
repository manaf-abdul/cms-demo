import instance from "axios";

const axios = instance.create({
  baseURL: import.meta.env.VITE_REST_BASE_URL,
  timeout: 29000,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errorText = null;
    let statusCode = 400;

    if (error.response) {
      statusCode = error.response.status;
      errorText =
        error.response.data.response ||
        error.response.data.message ||
        "Bad request, Try later.";
    } else if (error.request) {
      errorText = "Something went wrong, try later !";
    } else {
      errorText = "Please check your internet connection";
    }

    return Promise.reject({ errorText, statusCode });
  }
);

export default axios;
