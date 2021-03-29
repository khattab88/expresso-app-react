import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const selectedAreaReducer = (selectedArea = state.selectedArea, action) => {
    switch (action.type) {
        case actionTypes.AREAS_SELECT_AREA:
            return action.payload;
        default:
            return selectedArea;
    }
}