import {Box, Typography} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import CartItem from './CartItem'
export default function Cart (){
    const items = useSelector(store => store.cart.products)
    const {totalValue} = useSelector(store => store.cart)
    const cartTotal = <Box sx={{marginTop: '2rem', marginBottom: '2rem'}}>
                        <Typography variant="h5" >
                            Cart Total: {totalValue}
                        </Typography>
                     </Box>
    const cartEmpty = <Typography variant="h3" sx={{marginTop:"5rem"}}>You've got some shopping to do!</Typography>
    return (
        <>
        <Box sx={{marginTop:"1rem"}}>
            <Typography variant="h2">
                Cart
            </Typography>
            { totalValue ? cartTotal : cartEmpty}
            {Object.values(items).map(i => <CartItem cartItem={i}/>)}
        </Box>
        </>
    )
}