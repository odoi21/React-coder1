import React from "react";
import  Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ marginTop:200 ,display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;