import {
    SITES_LOAD_REQUEST,
    SITES_LOAD_SUCCESS,
    SITES_LOAD_FAIL
} from '../constants/settingsConstants'

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

// export const userProfileReducer = (state = {}, action) => {
//     switch(action.type) {
//         case PROFILE_LOAD_REQUEST:
//             return { profileLoading: true }
        
        
//     }
// }