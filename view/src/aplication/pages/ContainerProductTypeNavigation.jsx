import React from "react";
import ProductType from "../../components/ProductType";
import HeaderComponent from '../../components/headerComponent.jsx';




const ContainerProductTypeNavigation = () => {
    return (
        <>
            <HeaderComponent/>
            <div className='containerProductType'>
                <ProductType name="Belt" href="/cardList" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/wear.svg"/> 
                <ProductType name="Sleep" href="/sleepProducts" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/sleep.svg"/> 
                <ProductType name="Bones" href="/empty" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/play.svg"/> 
            </div>
        </>
    )}

    export default ContainerProductTypeNavigation;