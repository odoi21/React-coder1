import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const ItemDetail = ({ product }) => {
     // Usar el contexto del carrito
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

    return (
        <Card sx={{ maxWidth: "100%", maxHeight: "100vh", margin: 2 ,marginTop: 40}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <CardMedia
                        className="h-auto w-full"
                        component="img"
                        image={product.image} // URL de la imagen desde Firebase
                        alt={product.Title}
                    />
                </Grid>
                <Grid item xs={8}>
                    <CardContent width={"30%"}>
                        <Typography variant="h5" component="div">
                            {product.Title} {/* Título del producto */}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {product.Description} {/* Descripción del producto */}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "black" }}>
                            Precio: ${product.Price} {/* Precio del producto */}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Stock: {product.Stock} {/* Título del producto */}
                        </Typography>
                    <ItemCount 
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={() => agregarAlCarrito(item, cantidad)} // Agregar al carrito
                    />
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ItemDetail;