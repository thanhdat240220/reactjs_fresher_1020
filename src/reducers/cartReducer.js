import * as CartTypeAction from '../actionType/cartTypeAction';

const initState = {
    products: []
};

export default function cartReducer(state = initState, action) {
    switch (action.type) {
        case CartTypeAction.addProductToCart:
            return {
                products: [...state.products, action.product]
            };
        case CartTypeAction.editProductToCart:
            return state.products.map(p => p.id === action.product.id ? action.product : p);
        case CartTypeAction.removeProductToCart:
            return state.products.filter(p => p.id !== action.product.id);
        default:
            return state;
    }
}
