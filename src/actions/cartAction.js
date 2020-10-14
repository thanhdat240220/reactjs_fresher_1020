import * as CartTypeAction from '../actionType/cartTypeAction';

export function addProductToCart(product) {
    return {
        type: CartTypeAction.addProductToCart,
        product
    }
}

export function removeProductToCart(product) {
    return {
        type: CartTypeAction.removeProductToCart,
        product
    }
}

export function editProductToCart(product) {
    return {
        type: CartTypeAction.editProductToCart,
        product
    }
}
