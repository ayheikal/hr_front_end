import { GET_ALL_USERS, SET_LOADING } from "../types";



export default (state,action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                users:action.users,
                loading:false,

            }
            case SET_LOADING:
                return{
                    ...state,
                    loading:true,
                }
        default:
            return state;
    }
}