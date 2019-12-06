import React, { useEffect, useState } from 'react'
import axios from "axios";

function CategoryNavBar({onChangeCategory}) {
    const [categories, setCategories] = useState(null);

    async function fetchData() {
        try {
            const resCat = await axios.get("/api/categoria");
            setCategories(resCat.data.categorias);

        } catch(err) {
            console.log(err)
        }
      }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <nav className="navCategory">
            {categories && 
            <ul>
                {
                    categories.map((category) => {
                    return <li 
                                onClick={()=> onChangeCategory(category.id, category.nombre)} 
                                key={category.id}>{category.nombre}
                            </li>
                    })
                }
            </ul>
            }
        </nav>
    );    
}

export default CategoryNavBar;


