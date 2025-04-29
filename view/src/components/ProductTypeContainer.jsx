import React from "react";
import ProductTypeMain from "./ProductTypeMain";
import ImageDog from '../images/korgi.png';
import ImageCat from '../images/cat2.png';



const ProductTypeContainer = () => {
    return (
        <div className="containerPet">
            <ProductTypeMain name="Dog" image={ImageDog} href="/productsNav" />
            <ProductTypeMain name="CAT" image={ImageCat} href="/addProduct"/>
        </div>
    )}

    export default ProductTypeContainer;
