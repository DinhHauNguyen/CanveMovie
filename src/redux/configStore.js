import { applyMiddleware } from 'redux'
import { legacy_createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer'
import { ManageFilmReducer } from './reducers/ManageFilmReducer'
import { ManageTheaterReducer } from './reducers/ManageTheaterReducer'
import { ManageUserReducer } from './reducers/ManageUserReducer'
import { ManageTicketReducer } from './reducers/ManageTicketReducer'

const rootReducer = combineReducers({
    //state ứng dụng
    CarouselReducer,
    ManageFilmReducer,
    ManageTheaterReducer,
    ManageUserReducer,
    ManageTicketReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))