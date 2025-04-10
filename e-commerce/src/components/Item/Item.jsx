import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
                component="img"
                height="140"
                width="200"
                image=  {product.image}
                alt={product.Title}
            />
            <CardContent>
                <Typography variant="h5">{product.Title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.Description}
                </Typography>
                <Typography variant="h6">Precio: ${product.Price}</Typography>
                <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="error" sx={{ marginTop: 2 }}>
                        Ver Detalles
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default Item;

