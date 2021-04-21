import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const selectedBranchReducer = (selectedBranch = state.selectedBranch, action) => {
    switch (action.type) {
        case actionTypes.BRANCHES_SELECT_BRANCH:
            return action.payload;
        case actionTypes.BRANCHES_CLEAR_BRANCH:
            return state.selectedBranch;
        default:
            return selectedBranch;
    }
}