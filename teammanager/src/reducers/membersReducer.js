import { createStore } from "redux"

export const ADD_MEMBER = "ADD_MEMBER"
export const RMV_MEMBER = "RMV_MEMBER"

export const initialState = {
    members: [ `Charlie Zo`, `Ming Ping`, `Jing Peng`]
}

export const membersReducer = (state, action)=>{

    console.log(members)
    switch(action.type){
        case ADD_MEMBER:
            return{...state, sate: action.payload}
        case RMV_MEMBER:
            return {...state, state: action.payload}

        default:
            return state;
    }
}

const store = createStore(membersReducer);