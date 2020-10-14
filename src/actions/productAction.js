import Axios from 'axios';
import * as ProductTypeAction from '../actionType/productTypeAction';

export function initRequest() {
    return {
        type: ProductTypeAction.initRequest,
    }
}

export function fetchSuccess() {
    return {
        type: ProductTypeAction.fetchSuccess,
    }
}

export function fetchFail(err) {
    return {
        type: ProductTypeAction.fetchFail,
        err
    }
}

export function addProduct(product) {
    return {
        type: ProductTypeAction.addProduct,
        product
    }
}

export function removeProduct(product) {
    return {
        type: ProductTypeAction.editProduct,
        product
    }
}

export function editProduct(product) {
    return {
        type: ProductTypeAction.removeProduct,
        product
    }
}

export const getProducts = (condition) => (dispatch) => {
    dispatch(initRequest());
    Axios.get('').then((res) => {
        dispatch(fetchSuccess());

    }).catch((err) => {
        dispatch(fetchFail(err));
    })
}

export const getProduct = (id) => (dispatch) => {
    dispatch(initRequest());
    Axios.get('').then((res) => {
        dispatch(fetchSuccess());

    }).catch((err) => {
        dispatch(fetchFail(err));
    })
}