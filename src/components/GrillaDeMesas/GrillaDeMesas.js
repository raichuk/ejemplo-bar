import React, { Component } from 'react';
import {Grid} from 'react-mdl';

import * as api from '../../lib/api';

import Mesa from '../Mesa/Mesa';

const dataEjemploMesas = require('../../informacion-ejemplo/mesas.json');


class GrillaDeMesas extends Component {

	constructor() {
		super();
		this.state = {};

		this.state.mesas = [];
	}

	async componentDidMount() {
		const mesasTodas = await api.mesa().traerTodas();
		this.setState({mesas: mesasTodas});
	}

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
				<Grid>
					{
						this.state.mesas.map((mesaInfo, i) => {
							return (<Mesa {...mesaInfo} key={i} />);
						})
					}
				</Grid>
      </div>
    );
  }

}

export default GrillaDeMesas;
