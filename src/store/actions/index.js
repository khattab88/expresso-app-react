export const selectArea = (area) => {
    return {
        type: 'AREAS/SELECT_AREA',
        payload: area
    }
}

export const selectCountry = (country) => {
    return {
        type: 'COUNTRIES/SELECT_COUNTRY',
        payload: country
    }
}