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

export const selectCategory = (category) => {
    return {
        type: 'CATEGORIES/SELECT_CATEGORY',
        payload: category
    }
}