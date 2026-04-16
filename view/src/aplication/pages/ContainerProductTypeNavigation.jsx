import React from "react";
import ProductType from "../../components/ProductType";
import beltImage from "../../images/belt.png";

const ContainerProductTypeNavigation = () => {
    return (
        <>
            
            <div className='containerProductType'>
                <ProductType name="Belt" href="/wearProducts" imageUrl={beltImage}/> 
                <ProductType name="Sleep" href="/sleepProducts" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/sleep.svg"/> 
                <ProductType name="Bones" href="/bonesProducts" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/play.svg"/> 
            </div>
        </>
    )}

    export default ContainerProductTypeNavigation;