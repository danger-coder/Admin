export const initialState = {
    loading: false,
    admin: {},
    error: false
}

export const reducer = (state, action) => {
    console.log(state)
    if (action.type === "start") {
        return {
            loading: true,
            admin: [],
            error: false
        }
    }
    if (action.type === "success") {
        return {
            loading: false,
            admin: action.payload,
            error: false
        }
    }
    if (action.type === "error") {
        return {
            loading: false,
            admin: {},
            error: true
        }
    }


}



