import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Logito.png";
import { red } from "@mui/material/colors";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgb(71, 71, 71);", zIndex: 1100 }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: 80, marginRight: 2, }}
          />

          {/* Apartados */}
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button sx={{ color: "white", mx: 1 }}>Inicio</Button>
            <Button sx={{ color: "white", mx: 1 }}>Productos</Button>
            <Button sx={{ color: "white", mx: 1 }}>Categorías</Button>
          </Box>

          {/* Icono del carrito */}
          <IconButton sx={{ color: "white"}}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
