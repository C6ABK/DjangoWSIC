import {
    SITES_LOAD_REQUEST,
    SITES_LOAD_SUCCESS,
    SITES_LOAD_FAIL
} from '../constants/settingsConstants'

export const sitesListReducer = (state = { sites:[] }, action) => {
    switch(action.type){
        case SITES_LOAD_REQUEST:
            return { loading: true, sites: [] }

        case SITES_LOAD_SUCCESS:
            return { loading: false, sites: action.payload }

        case SITES_LOAD_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}