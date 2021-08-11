import axios from 'axios';
import {
   API_DRILLDOWNS,
   API_MEASURES,
   API_DRILLDOWNS_VALUE_DEFAULT,
   API_MEASURES_VALUE_DEFAULT,
   DEFAULT_LIMIT
} from '../../constants/root';


import {
   SET_REPOSE,
   SET_CURRENT_DATA_USA,
   CHANGE_FETCH,
} from "./actionTypes";


export const changeStatusFetch = (statusFetch) => ({ type: CHANGE_FETCH, payload: statusFetch })

export const setCurrentDataUSA = (data) => (({ type: SET_CURRENT_DATA_USA, payload: data.reverse().splice(0, 6) }));



export const setRepose = (data) => (({ type: SET_REPOSE, payload: data }));


export const getRepose =
   (
      api,
      drillDownsOrYear = API_DRILLDOWNS_VALUE_DEFAULT,
      meassures = API_MEASURES_VALUE_DEFAULT
   ) =>
      async (dispatch) => {
         console.log(`${api}?${API_DRILLDOWNS}=${drillDownsOrYear}&${API_MEASURES}=${meassures}`)
         await axios(`${api}?${API_DRILLDOWNS}=${drillDownsOrYear}&${API_MEASURES}=${meassures}`)
            .then(response => {
               dispatch(changeStatusFetch(true))
               dispatch(setRepose(response.data.data))
            })
            .catch(error => console.log(error))
         dispatch(changeStatusFetch(false))
      };

