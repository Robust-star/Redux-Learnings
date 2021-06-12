export const increment = (nu) => {
    return {
        type: 'INCREMENT',
        payload: nu
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
};