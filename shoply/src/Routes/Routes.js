import {Switch, Route, Redirect} from 'react-router-dom'


import ProductList from '../components/ProductList'
import Product from '../components/Product'
import Cart from '../components/Cart'
export default function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <ProductList/>
            </Route>
            <Route exact path="/products/:id">
                <Product/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route exact path="/404">
                <h1>PAGE NOT FOUND</h1>
            </Route>
            <Redirect to="/404"/>
        </Switch>
    )
}