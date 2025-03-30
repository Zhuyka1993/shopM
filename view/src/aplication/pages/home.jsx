import React from 'react';

import HeaderComponent from '../../components/headerComponent.jsx';
import ProductTypeContainer from '../../components/ProductTypeContainer.jsx'
import FooterComponent from '../../components/FooterComponent.jsx';

function HomePage() {
  return (
    <>
    <HeaderComponent/>
    <ProductTypeContainer/>
    <FooterComponent/>
    
    </>
  );
}

export default HomePage;