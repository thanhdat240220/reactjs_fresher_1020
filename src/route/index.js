import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import HomePage from '../page/home';
import LoginPage from '../page/login';
import ProductsPage from '../page/product';
import ProductDetailPage from '../page/productDetail';
import CartPage from '../page/cart';
import CheckOutPage from '../page/checkout';

function Routers(props) {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/products'>
                    <ProductsPage />
                </Route>
                <Route exact path='/product/:productId'>
                    <ProductDetailPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/cart'>
                    <CartPage />
                </Route>
                <Route exact path='/checkout'>
                    <CheckOutPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        </Router>
    );
}

export default Routers;   