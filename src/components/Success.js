import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Header, Icon } from 'semantic-ui-react'

class Success extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <Header as='h1' icon textAlign='center' style={headerStyle}>
          <Icon name='check circle' color="green" />
          <Header.Content>Compra realizada com sucesso!</Header.Content>
        </Header>
      </section>
    )
  }
}

const sectionStyle = {
  marginTop: "30vh"
}

const headerStyle = {
  color: "white"
}

export default withRouter(Success)
