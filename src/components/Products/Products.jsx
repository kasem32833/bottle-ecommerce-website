import './products.css'
import Product from '../Product/Product'
import { useEffect, useState } from 'react';

const Porducts = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
     } ,[])
    return (
        <div>
            <h3>Products:{products.length}</h3>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Porducts;