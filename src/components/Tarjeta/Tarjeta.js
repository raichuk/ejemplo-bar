import React from 'react';
import {
	Card,
	CardTitle,
	CardText,
	CardActions,
	CardMenu,
	Button,
	IconButton
} from 'react-mdl';

import ListaProductos from '../ListaProductos/ListaProductos';

const Tarjeta = ({abierta}) => {
	console.log(abierta)
	return (
		<Card shadow={0} style={{width: '100%'}}>
			<CardText style={{width: '100%', height: '240px', overflow: 'auto', padding: '0px 0px 0px 0px'}}>
				<ListaProductos />
			</CardText>
			<CardActions border style={{height: '40px'}}>
					<Button colored>Get Started</Button>
			</CardActions>
		</Card>
	);
};

export default Tarjeta;
