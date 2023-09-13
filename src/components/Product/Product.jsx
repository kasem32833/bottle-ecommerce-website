import './product.css';

const product = ({product}) => {
    console.log(product)
    const {name, price, img} = product;
    return (
        <div className='product-box'>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Price:{price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default product;