import state from "../state";

export const selectedCountryReducer = (selectedCountry = state.selectedCountry, action) => {
    switch (action.type) {
        case "COUNTRIES/SELECT_COUNTRY":
            return action.payload;
        default:
            return selectedCountry;
    }
}