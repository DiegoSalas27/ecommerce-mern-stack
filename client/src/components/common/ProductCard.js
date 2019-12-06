import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({
    id,
    nombre,
    descripcion,
    precio
}) => {
    return(
        <Link style={{ textDecoration: 'none', color: 'black'  }} to = {{
            pathname: '/product-details',
            state: {
                productId: id
            }
        }}>
            <div id={id} className="card testimonial mx-2">
                
            <img src="https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png" 
            className="card-img-top h-50" alt="producto" />
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">
                        {descripcion}
                        </p>
                        <p>
                            <span className="d-block"></span>
                            <span className="float-right"><b>
                                {precio}</b>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;