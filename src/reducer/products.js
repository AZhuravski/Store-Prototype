import { LOAD_ALL_PRODUCTS, LOAD_PRODUCT_BY_ID, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
    loading: false,
    loaded: false,
    entities: []
}

export default (products = defaultState, action) => {
    const { type, data, response } = action

    switch (type) {
        case LOAD_ALL_PRODUCTS + START: return Object.assign({}, products, {loading: true})
        case LOAD_ALL_PRODUCTS + SUCCESS: return {entities: response, loaded: true}
    }

    return products
}