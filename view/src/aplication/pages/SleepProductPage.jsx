import React from 'react';
import CardList from '../../modules/card-list/index.jsx';

import IntroCurt from '../../components/PetIntro.jsx';

import Image from '../../images/doggg.png';


function SleepProductPage() {
  return (
    <>
    
    <IntroCurt
    littleH="Sleep"
    bigH="Upgrade your pet and make it more stylish"
    image={Image} />
    <CardList />
   
    
    </>
  );
}

export default SleepProductPage;