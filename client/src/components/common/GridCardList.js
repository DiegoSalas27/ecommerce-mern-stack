import React from 'react'
import ProductCard from './ProductCard';

 function GridCardList({datos}) {
    return(
        <div className="grid-card">
        {datos && datos.map((data, i) => {
            return (
                <ProductCard 
                    key= {data.id}
                    id= {data.id}
                    nombre={data.nombre}
                    descripcion={data.descripcion}
                    precio={data.precio}
                />
            )
        })}
        </div>
    );
}

export default GridCardList;
