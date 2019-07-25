import axios from 'axios'

export const addToWish = (obj) => ({
    type: 'ADD_TO_WISH_LIST',
    payload: obj
});

export const removeWish = (id) => ({
    type: 'DELETE_FROM_WISH',
    payload: id
});

export function setBooks() {
    return (dispatch) => {
    dispatch({
        type: 'BOOKS_REQUEST'
    });

   axios.get('/books.json')
        .then (data => dispatch({
                type: 'BOOKS_SUCCESS',
                payload: data
            })
        )
        .catch(error => dispatch({
                type: 'BOOKS_ERROR',
                payload: error
            })
        )
}
}