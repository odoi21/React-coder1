import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import style from './CartWidget.module.css'
import { red } from '@mui/material/colors';

// src/components/CartWidget/CartWidget.jsx

function CartWidget() {
    return (
        <div className={style["Cart"]}>
        <IconButton >
            <ShoppingCartIcon className={style.Cart} />
        </IconButton>
        </div>
    );
}



export default CartWidget;

