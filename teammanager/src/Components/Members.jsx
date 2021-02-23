import React, { useReducer } from 'react';
import { connect } from 'react-redux';
//
import { membersReducer, initialState, ADD_MEMBER, RMV_MEMBER} from '../reducers/membersReducer';

function Members() {
    
    const [state, dispatch] = useReducer(membersReducer, initialState)
    
    
    return (
        <div>
           hi
        </div>
    )
}

const mapSateToProps = state =>{
    return{
        members: state.members
    }
}

export default connect (mapSateToProps,{})(Members);