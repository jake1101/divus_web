import React from 'react';
import styled from 'styled-components';

import History from './content/History';
import Summary from './content/Summary';
import Orgni from './content/Orgni';

export default function Section() {
  return (
    <section className="contSection">
      <History />
      <Summary />
      <Orgni />
    </section>
  )
}
