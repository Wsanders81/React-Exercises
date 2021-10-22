import { Box, Typography, Paper , Button} from '@mui/material';
import {useDispatch} from 'react-redux'
import './CartItem.css';
export default function CartItem({ cartItem }) {
	const dispatch = useDispatch()
    const item = [cartItem]
    const handleClick = () => {
        cartItem.quantity += 1
        dispatch({type: "ADD_PRODUCT", item})
    }
    const handleDelete = () => {
        // if(cartItem[0].quantity === 0) {
        //   console.log("OUT")
        //   return
        // }
        cartItem.quantity -= 1
        dispatch({type: "DELETE_PRODUCT", item})   
    }

	return (
		<Box sx={{ width: '50%', margin: 'auto' }}>
			<Paper sx={{ display: 'flex', marginTop: '1rem' }}>
				<Box sx={{ height: 175, width: 200, marginTop: '1rem' }}>
					<img
						style={{
							width: '5rem',
							height: '4rem',
							objectFit: 'contain'
						}}
						src={cartItem.image_url}
						alt={cartItem.name}
					/>
					<Typography mt={2} variant="body1">
						{cartItem.name.toUpperCase()}
					</Typography>
				</Box>
				<Box sx={{ flexWrap: 'wrap', width: '30rem'}}>
					<Typography sx={{ marginTop: '2rem' }}>
						{cartItem.description}
					</Typography>
					<Typography sx={{ marginTop: '2rem' }}>
						Quantity: {cartItem.quantity}
					</Typography>
                    
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Typography align="center" sx={{ marginTop: '1rem', marginRight: '1rem' }}>
						Total Price:
					</Typography>
                    <Typography variant='h4' sx={{marginTop: '1rem', marginBottom:'1rem'}}>
                        ${cartItem.price * cartItem.quantity}
                    </Typography>
                    <Button onClick={handleClick}>Add</Button>
                    <Button onClick={handleDelete}>Remove</Button>
				</Box>
			</Paper>
		</Box>
	);
}
