import {
    SITES_LOAD_REQUEST,
    SITES_LOAD_SUCCESS,
    SITES_LOAD_FAIL,
    PROFILE_LOAD_REQUEST,
    PROFILE_LOAD_SUCCESS,
    PROFILE_LOAD_FAIL,
    PROFILE_LOGOUT
} from '../constants/settingsConstants'

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_LOAD_REQUEST:
            return { profileLoading: true }

        case PROFILE_LOAD_SUCCESS:
            return { profileLoading: false, profileInfo: action.payload }

        case PROFILE_LOAD_FAIL:
            return { profileLoading: false, error: action.payload }

        case PROFILE_LOGOUT:
            return {}

        default:
            return state
    }
}

export const sitesListReducer = (state = { sites:[] }, action) => {
    switch(action.type){
        case SITES_LOAD_REQUEST:
            return { sitesLoading: true, sites: [] }

        case SITES_LOAD_SUCCESS:
            return { sitesLoading: false, sites: action.payload }

        case SITES_LOAD_FAIL:
            return { sitesLoading: false, sitesError: action.payload }

        default:
            return state
    }
}