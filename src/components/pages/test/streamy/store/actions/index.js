export const signIn = (userId) => {
    return {
        type: 'AUTH/SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'AUTH/SIGN_OUT'
    }
}