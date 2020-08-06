import React,{useReducer} from 'react'
import UserReducer from './userReducer'
import userContext from './userContext'
import axios from 'axios'
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom";
import{
    GET_ALL_USERS, SET_USER_LOADING,
    GET_USER_BY_NAME_AND_TITLE,
    LOGIN,



} from '../types'
const UserState=(props)=>{
    let history = useHistory();
    const initialState={
        users:[],
        user:null,
        loading:false,

    }


    const [state, dispatch] = useReducer(UserReducer, initialState);
    const setLoading=()=>dispatch({type:SET_USER_LOADING})

    const userRegister=(user)=>{
        axios
        .post(`${process.env.REACT_APP_HOST_NAME}/api/register`, user, {
            header: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then( res =>{
            console.log("res :", res)
        }).catch( err => {
            console.log(err.response.data)
        })

        history.push('/signin')

    }

    const signIn=(userObject)=>{
        axios.post(`${process.env.REACT_APP_HOST_NAME}/api/login`,userObject,{
            header: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(res=>{
            localStorage.setItem('login',JSON.stringify({
                token:res.data.data.access_token,
                userId: res.data.data.user.id
            }))
        })
       .catch( err=>{
            console.log("err",err.response)
        })
        history.push('/')
    }


const getToken = () =>{
    // return localStorage.getItem('token');
    return 'token';
}

const isAuthenticated = () =>{
    let token = getToken()
    return (token) ? true : false
}



// get user info
const getUserInfo=(id)=>{
    //axios get info
    // get name and email,
}


//get job that a user applied and their status
const getStatusOfJobs=(id)=>{
    //axios to get job

}

//get all users
const getAllUsers=()=>{
//axios get all users
const res=[
    {
        id:1,
        name:'ayman',
        email:'201@gmail.com',
    },
    {
        id:2,
        name:'ahmed',
        email:'201@gmail.com',
    }
]
dispatch({
    type:GET_ALL_USERS,
    payload:res,
})
}

// const search for a user by his title or name
const getUserByNameAndTitle=(searchAddress)=>{
    //axios 
    const res=[]
    dispatch({
        type:GET_USER_BY_NAME_AND_TITLE,
        payload:res,
    })

}

    return (
        <userContext.Provider
        value={{
            name:state.name,
            users:state.users,
            user:state.user,
            userRegister,
            signIn,
        }}
        >
            {props.children}

        </userContext.Provider>
    )
}


export default UserState;