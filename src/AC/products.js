import { LOAD_ALL_PRODUCTS, LOAD_PRODUCT_BY_ID, START, SUCCESS, FAIL } from '../constants'
import { loadProductById as loadPById } from './api'

export function loadAllProducts() {
    return {
        type: LOAD_ALL_ARTICLES,
        callApi: '/api/product'
    }
}

export function loadProductById(id) {
    return (dispatch, store) => {
        dispatch({
            type: LOAD_PRODUCT_BY_ID + START
        })

        loadPById(id)
            .done(response => dispatch({
                type: LOAD_PRODUCT_BY_ID + SUCCESS,
                data: { id },
                response
            }))
            .fail(error => dispatch({
                type: LOAD_PRODUCT_BY_ID + FAIL,
                data: { id },
                error
            }))
    }
}