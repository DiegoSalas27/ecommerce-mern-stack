import React, { useEffect, useState } from 'react'
import CategoryNavBar from '../common/CategoryNavBar';
import { useHistory } from "react-router-dom";
import axios from "axios";
import AppNavBar from '../common/Navbar';

function ProductDetails(props) {
    const { productId } = props.location.state;
    const [producto, setProducto] = useState({})
    const [categoria, setCategoria] = useState('')
    var history = useHistory();

    async function fetchData() {
        try {
            const resProd = await axios.get(`/api/producto/${productId}`);
            setProducto(resProd.data.producto)

            const resCat = await axios.get(`/api/categoria/${resProd.data.producto.categoriaId}`);
            setCategoria(resCat.data.categoria.nombre)

        } catch(err) {
            console.log(err)
        }
      }

    useEffect(()=> {
        fetchData();
    },[])

    function onChangeCategory(categoryId) {
        history.push('/', categoryId)
    }

    return(
        <div>
            <AppNavBar />
            <CategoryNavBar onChangeCategory={onChangeCategory} />
            <div className="row margin-detail">
                <div className="col-md-6" style={{textAlign: 'center'}}>
                    <img src="https://rockcontent.com/es/wp-content/uploads/2019/02/o-que-e-produto-no-mix-de-marketing-1280x720.png" 
                    className="product-detail" alt="producto" />
                </div>
                <div className="col-md-3">
                    <p style={{'fontSize': '30px'}}>
                        {producto.nombre}
                    </p>
                    <p>Precio: {producto.precio}</p>
                    <p>{producto.descripcion}</p>
                </div>
                <div className="col-md-3">
                    <p style={{'fontSize': '25px'}}>
                        {categoria}
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDetails;