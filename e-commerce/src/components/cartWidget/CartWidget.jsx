import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './CartWidget.module.css'
import { red } from '@mui/material/colors';
import { Badge } from '@mui/material';

// src/components/CartWidget/CartWidget.jsx

function CartWidget() {
    return (
        <div className={style["Cart"]}>
        <IconButton >
            <Badge badgeContent={0} color='error'>
            <ShoppingCartIcon className={style.Cart} />
            </Badge>
        </IconButton>
        </div>
    );
}



export default CartWidget;

