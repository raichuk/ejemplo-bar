import React, { Component } from 'react';
import { IconButton, Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';

import GrillaDeMesas from '../GrillaDeMesas/GrillaDeMesas';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div>
        <Layout fixedHeader fixedDrawer>
          <Header title="Ejemplo Bar">
          </Header>

          <Drawer title="">
          </Drawer>

          <Content>
						<GrillaDeMesas />
          </Content>

        </Layout>
			</div>
    );
  }

}

export default Main;
