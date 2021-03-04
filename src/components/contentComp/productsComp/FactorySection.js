import React from 'react';
import styled from 'styled-components';

import FactoryArt1 from './content/FactoryArt1';
import FactoryArt2 from './content/FactoryArt2';
import FactoryArt3 from './content/FactoryArt3';

const Factory = ({ dp }) => {
  return (
    <section style={dp} className="contSection">
      <FactoryArt1></FactoryArt1>
      <FactoryArt2></FactoryArt2>
      <FactoryArt3></FactoryArt3>
    </section>
  )
}
export default Factory
