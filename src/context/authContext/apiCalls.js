import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    try{
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
    }
}