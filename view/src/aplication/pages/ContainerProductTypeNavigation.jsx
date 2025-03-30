import React from "react";
import ProductType from "../../components/ProductType";
import HeaderComponent from '../../components/headerComponent.jsx';



const ContainerProductTypeNavigation = () => {
    return (
        <>
            <HeaderComponent/>
            <div className='containerProductType'>
                <ProductType name="Belt" href="/empty" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/wear.svg"/> 
                <ProductType name="Sleep" href="/SleepProducts" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/sleep.svg"/> 
                <ProductType name="Bones" href="/empty" imageUrl="https://showcase.nikitinteam.com/cases/astropets/image/catalog/play.svg"/> 
            </div>
        </>
    )}

    export default ContainerProductTypeNavigation;