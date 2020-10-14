import * as ProductTypeAction from '../actionType/productTypeAction';

const initState = {
    products: [],
    product: {},
    loading: false,
    status: null
}

export default function productReducer(state = initState, action) {
    switch (action.type) {
        case ProductTypeAction.addProduct:
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case ProductTypeAction.removeProduct:
            return {
                ...state,
                products: state.products.map(p => p.id !== action.product.id)
            }
        case ProductTypeAction.editProduct:
            return {
                ...state,
                products: state.products.map(p => p.id !== action.product.id ? p : action.product)
            }
        case ProductTypeAction.initRequest:
            state.loading = true;
            return { ...state }
        case ProductTypeAction.fetchSuccess:
            state.loading = true;
            state.status = true;
            return { ...state }
        case ProductTypeAction.fetchFail:
            state.loading = true;
            state.status = false;
            return { ...state }
        default:
            return state;
    }
}