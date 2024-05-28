import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios({
      url: "http://127.0.0.1:4000/users/login",
      data: user,
      method: "POST",
    });
    console.log(response)
    dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginFailure())
  }
};
