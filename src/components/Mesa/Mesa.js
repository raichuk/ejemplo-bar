import React from 'react';
import {Grid, Cell} from 'react-mdl';

import Tarjeta from '../Tarjeta/Tarjeta';

const Mesa = (props) => (
  <Cell col={4}>
    <Tarjeta {...props}/>
  </Cell>
)

export default Mesa;
