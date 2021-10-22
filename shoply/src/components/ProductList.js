
import {useSelector} from 'react-redux'
import './ProductList.css'
import { Link } from 'react-router-dom'
import {Paper, Typography} from '@mui/material'
export default function ProductList() {
    const products = useSelector(store => store.products.products)
    return (
        <>
            <h1>Buy Somethin' Would Ya?!</h1>
        <div className="ProductList">
            
            {products.map(p =>
            <Link to={`products/${p.id}`} key={p.id}>
            <Paper className="ProductList-paper" elevation={5} sx={{marginTop: '1rem', height: '4rem'}} >
                <Typography  sx={{width: '100%', paddingTop: '1.25rem'}}>
                    {p.name.toUpperCase()}
                </Typography>
            </Paper>
            </Link> )}
        </div>
        </>
    )
}