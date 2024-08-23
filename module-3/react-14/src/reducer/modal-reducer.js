export const states = {
    isOpen: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "CLOSE":
            return {...state, isOpen: false};
            break;
        case "OPEN":
            return {...state, isOpen: true};
            break;
        default:
            return state;
    }
};