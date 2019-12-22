import * as types from '../actions/types';

const initialState = {
    definition: [],
    text: {}
};

const definitionReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_DEFINITIONS:
            
            return Object.assign({}, state, { definition: action.definitions })
        case types.CHANGE_LANGUAGE:
                
                return Object.assign({}, state, { definition: {
                    definition: action.translation
                } })
        default:
            return state;
    }
}

export default definitionReducer;
