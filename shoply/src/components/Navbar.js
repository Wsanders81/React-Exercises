import {AppBar, Box, Toolbar, Typography, Button, IconButton, Badge} from '@mui/material'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.css'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const itemCount = useSelector(store => store.cart.quantity)
  
    return (
        <div className="Navbar">
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to={"/"}>
                SHOPLY
                </Link>
            </Typography>
            <Button color="inherit">
                <Link to={"/"}>
                Products
                </Link>
                </Button>
            <Button color="inherit">
                <Link to={"/cart"}>
                  <Badge badgeContent={itemCount} color="error">
                <ShoppingCartIcon/>
                </Badge>
                </Link>
                </Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
  }