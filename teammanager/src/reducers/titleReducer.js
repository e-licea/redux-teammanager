
export const initialState = {
    title: 'This is from the reducer.',
    editing: false
}


export const titleReducer = (state, action)=>{

    switch(action.type){
        case "UPDATE_TITLE":
            return {...state, title: action.payload, editing: false};

        case "TOGGLE_EDIT":
            return {...state, editing: !state.editing};

        default:
            return state;

    }

    //output: newState
}