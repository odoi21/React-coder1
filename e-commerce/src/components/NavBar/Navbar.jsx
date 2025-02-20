import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Logo from "../../assets/Logito.png";
import { red } from "@mui/material/colors";
import CartWidget from '../CartWidget/CartWidget/'
import style from './NavBar.module.css'

export default function NavBar() {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: "rgb(71, 71, 71)", zIndex: 1100 }}>
            <Container maxWidth="100" sx={{ margin: '0', padding: '0 !important' }}>
                <Toolbar sx={{ margin: '0', padding: '0 !important', display: 'flex', }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ height: 80 }} />
                    </Box>
                    {/* Apartados */}
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}>Inicio</Button>
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}>Productos</Button>
                            <Button className={style.customButton} sx={{ color: "white", minWidth: '80px' }}>Categorias</Button>
                        </Box>
                    </Box>
                    {/* Icono del carrito */}
                    <Box sx={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                        <CartWidget />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}