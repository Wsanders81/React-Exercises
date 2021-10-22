import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {useParams} from 'react-router-dom'
import './Product.css'
import {useSelector, useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Product(){
    const {id} = useParams() 
    const dispatch = useDispatch()
    const products = useSelector(store => store.products.products)
    const item = products.filter(i => i.id === id)
    const {name, price, description, image_url} = item[0]
    
    const notify = () => {toast.error(`You don't have any ${name}s in your cart!`)}
    
    const handleClick = () => {
        item[0].quantity += 1
        dispatch({type: "ADD_PRODUCT", item})
    }
    const handleDelete = () => {
        if(item[0].quantity === 0) {
          notify()
          return
        }
        item[0].quantity -= 1
        dispatch({type: "DELETE_PRODUCT", item})
    }
    return (
        
        <div className="Product-container" >
          <ToastContainer
            position="top-right"
            autoClose={3000}

          />
            <h1>Product Description</h1>
        <Card className="Product" >
          <CardMedia
            style={{objectFit:"contain", height: 300}}
            component="img"
            height="400"
            image={image_url}
            alt={`image of ${name}`}
          />
          <CardContent sx={{height: 200}}>
            <Typography gutterBottom variant="h5" component="div">
              {name.toUpperCase()}
            </Typography>
            <Typography mb={1} variant="body2" color="text.secondary">
              Price : ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            
          </CardContent>
          <CardActions >
              <div style={{margin:'auto'}}>
              
            <Button onClick={handleClick}  variant="outlined">Add To Cart</Button>
            <Button style={{marginLeft: '1rem'}} onClick={handleDelete} color="error"  variant="outlined">Remove Item</Button>
            
            </div>
          </CardActions>
        </Card>
        </div>
      );
}