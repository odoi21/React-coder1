import { useState, useEffect } from 'react'
import style from './Item.module.css'

export default function ProductsCard(params) {
    const  Products  = [{
        id: 1, 
        title: 'Ryzen 5 8600g', 
        description: 'Procesador con graficos integrados', 
        price: '$200', 
        pictureUrl: 'picture'
    },
    {
        id: 2, 
        title: 'Ryzen 9 7800xd', 
        description: 'Procesador con graficos integrados', 
        price: '$400', 
        pictureUrl: 'picture'
    },
    {
        id: 3, 
        title: 'Ryzen 5 3600', 
        description: 'Procesador con graficos integrados', 
        price: '$100', 
        pictureUrl: 'picture'
    }
]
}