import React from 'react';

import {DataTable, TableHeader} from 'react-mdl';

const ListaProductos = () => (
	<DataTable
			style={{width: '100%'}}
			shadow={0}
			rows={[
					{material: 'Acrylic (Transparent)'},
					{material: 'Plywood (Birch)'},
					{material: 'Plywood (Birch)'},
					{material: 'Plywood (Birch)'},
			]}>
		<TableHeader name="material">Productos servidos</TableHeader>
	</DataTable>
)

export default ListaProductos;
