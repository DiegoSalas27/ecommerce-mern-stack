import React, { useEffect, useState } from 'react'
import axios from "axios";
import GridCardList from '../../components/common/GridCardList';
import { useSelector } from 'react-redux';
import CategoryNavBar from '../common/CategoryNavBar';
import AppNavBar from '../common/Navbar';

function Main(props) {
    const [productos, setProductos] = useState(null);
    var filteredProducts = null;

    const searchField = useSelector(state => state.searchProducts.searchField);

    async function fetchData() {
        try {
            let resProd = null;
            if(props.location.state !== undefined) {
                resProd = await axios.get(`/api/producto?categoria=${props.location.state}`);
            } else {
                resProd = await axios.get(`/api/producto`);
            }
            setProductos(resProd.data.productos)

        } catch(err) {
            console.log(err)
        }
      }

    useEffect(() => {
        fetchData();
    },[])

    async function onChangeCategory(id) {
        const resCat = await axios.get(`/api/producto?categoria=${id}`);
        setProductos(resCat.data.productos);
    }

    if(productos) {
        filteredProducts = productos.filter(producto => {
            return producto.nombre.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    return (
        
        <div>
            <AppNavBar />
            <CategoryNavBar onChangeCategory={onChangeCategory} />
            <GridCardList datos={filteredProducts}/> 
        </div>
    )
}

export default Main;