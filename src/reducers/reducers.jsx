import { ADD_CELEB, REMOVE_CELEB } from "../actions/actions";

const initialState = {

}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CELEB:
            return {
                ...state,
                celebs
            }
    }
}