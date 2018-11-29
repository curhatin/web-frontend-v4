import {
    LOGIN_AUTH,
    LOG_OUT,
    FETCH_DATA_POST
} from "./types"
import axios from "axios";

export const login = ({email, password}) => (dispatch) => {
    axios.post("https://curhatin.herokuapp.com/account/login",{
        email,
        password
    })
    .then(res => {
        console.log(res)
        if(res.data.token){
            dispatch({
                type: LOGIN_AUTH,
                payload: res.data.token
            })
            localStorage.token = res.data.token
            axios.get('https://curhatin.herokuapp.com/post',{headers: {
        authorization: `Bearer ${res.data.token}`
        }})
    .then(res => 
     {  console.log(res.data)
        dispatch({
        type: FETCH_DATA_POST,
        payload: res.data
    })})
    .catch(err => console.log(err))
        }
        
    })
    .catch(err => console.log(err))
}

export const cekToken = (token) => (dispatch) => {
    // axios.post("https://curhatin.herokuapp.com/account/login",{
    //     email,
    //     password
    // })
    // .then(res => dispatch({
    //     type: LOGIN_AUTH
    // }))
    // .catch(err => console.log(err))
    dispatch({
        type: LOGIN_AUTH,
        payload: token
    })
}

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
        isAuthenticated: false
    })
}

