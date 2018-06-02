import React, { Component } from 'react';
import { IconButton, Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
			<div>
        <Layout fixedHeader>
          <Header title="Ejemplo Bar">
          </Header>
          <Content>
          </Content>
        </Layout>
			</div>
    );
  }

}

export default Main;
