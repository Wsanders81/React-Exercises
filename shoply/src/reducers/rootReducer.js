import { combineReducers } from "redux";

import productList from "./products";
import cart from "./cart";

const rootReducer = combineReducers({products: productList, cart})
export default rootReducer; 
