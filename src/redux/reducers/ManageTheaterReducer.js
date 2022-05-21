import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/ManageTheaterType"


const stateDefault = {
    arrayTheaterSystem: []
}

export const ManageTheaterReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP_CHIEU: {
            state.arrayTheaterSystem = action.arrayTheaterSystem
            return {...state}
        }
        default: return { ...state }
    }
}