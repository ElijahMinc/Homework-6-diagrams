import {
   SET_REPOSE,
   SET_CURRENT_DATA_USA,
   CHANGE_FETCH
} from "../actions/actionTypes";

const initialState = {
   datausa: [],
   currentDataUsa: [],
   isFetching: true
};

const reposReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_REPOSE:
         return {
            ...state,
            datausa: action.payload,
            isFetching: false
         };
      case SET_CURRENT_DATA_USA:
         return {
            ...state,
            currentDataUsa: action.payload,
         };
      case CHANGE_FETCH:
         return {
            ...state,
            isFetching: action.payload
         };

      default:
         return state;
   }
};

export default reposReducer;
