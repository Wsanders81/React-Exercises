
const INITIAL_STATE = {
	products     : {},
	totalValue   : 0, 
    quantity: 0
};

export default function cart(state = INITIAL_STATE, action) {
	switch (action.type) {
        case 'ADD_PRODUCT':
            const price = +action.item[0].price;
            const cartCopy = {...state.products}
            cartCopy[action.item[0].name] = action.item[0]
            state.quantity += 1
			return {
				...state,
				products     : cartCopy,
				totalValue   : state.totalValue + price, 
			};

		case 'DELETE_PRODUCT':
            const itemPrice = +action.item[0].price;
            state.quantity -= 1
            const cartCopyTwo = {...state.products}
            if(action.item[0].quantity === 0) {
                delete cartCopyTwo[action.item[0].name]
            }
			return {
				...state,
				products : cartCopyTwo, 
                totalValue : state.totalValue - itemPrice
    
			};
		default:
			return state;
	}
}
