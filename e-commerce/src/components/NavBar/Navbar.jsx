import * as React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box, Container } from "@mui/material";
import Logo from "../../assets/Logito.png";
import { red } from "@mui/material/colors";
import CartWidget from '../CartWidget/CartWidget/'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (

        <AppBar position="fixed" sx={{ backgroundColor: "rgb(71, 71, 71)", zIndex: 1100 }}>
            <Container maxWidth="100" sx={{ margin: '0', padding: '0 !important' }}>
                <Toolbar sx={{ margin: '0', padding: '0 !important', display: 'flex', }}>
                    {/* Logo */}
                    <Link to={"/"}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box component="img" src={Logo} alt="Logo" sx={{ height: 80 }} />
                        </Box>
                    </Link>
                    {/* Apartados */}
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Link to={"/"}>
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}>Inicio</Button>
                            </Link>
                            <Link to={'/Items'}>
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}>Productos</Button>
                            </Link>

                            {/* Dropdown Button */}
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}  onClick={handleMenuOpen}>
                                Categorias 
                            </Button>
                            
                            {/* Dropdown Menu */}
                            <Menu  anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                                <Link to={'/category/Microprocesadores'}>
                                <MenuItem className={style.category} sx={{  minWidth: '80px' }}  onClick={handleMenuClose}>Microprocesadores</MenuItem>
                                </Link>
                                <Link to={'/category/Motherboards'}>
                                <MenuItem className={style.category} onClick={handleMenuClose}>MotherBoards</MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                    </Box>
                    <Link to={'/Cart'}>
                    {/* Icono del carrito */}
                    <Box sx={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                        <CartWidget />
                    </Box>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar