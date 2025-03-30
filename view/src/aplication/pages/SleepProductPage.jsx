import React from 'react';
import CardList from '../../modules/card-list/index.jsx';
import HeaderComponent from '../../components/headerComponent.jsx';
import IntroCurt from '../../components/PetIntro.jsx';
import FooterComponent from '../../components/FooterComponent.jsx';
import Image from '../../images/doggg.png';


function SleepProductPage() {
  return (
    <>
    <HeaderComponent/>
    
    <IntroCurt
    littleH="Sleep"
    bigH="Upgrade your pet and make it more stylish"
    image={Image} />
    <CardList />
    <FooterComponent/>
    
    </>
  );
}

export default SleepProductPage;