import axios from 'axios'
import {
    SITES_LOAD_REQUEST,
    SITES_LOAD_SUCCESS,
    SITES_LOAD_FAIL
} from '../constants/settingsConstants'

export const listSites = () => async (dispatch) => {
    try {
        dispatch({ type: SITES_LOAD_REQUEST })

        // const {
        //     userLogin: {userInfo},
        // } = getState()

        // const config = {
        //     headers: {
        //         'Content-type': 'application/json',
        //         Authorization: `Bearer ${userInfo.token}`
        //     }
        // }

        const { data } = await axios.get(
            `api/settings/sites/`
        )

        dispatch({
            type: SITES_LOAD_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: SITES_LOAD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}