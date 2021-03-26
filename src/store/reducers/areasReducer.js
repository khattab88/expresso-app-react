import state from "../state";

export const selectedAreaReducer = (selectedArea = state.selectedArea, action) => {
    switch (action.type) {
        case "AREAS/SELECT_AREA":
            return action.payload;
        default:
            return selectedArea;
    }
}