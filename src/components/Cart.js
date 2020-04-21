import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Header, List, Image, Divider, Button } from 'semantic-ui-react'

export class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mhPrice: 69.99,
      re3Price: 129.99,
      rdr2Price: 239.99
    }

    this.handleFinishPurchase = this.handleFinishPurchase.bind(this)
  }

  handleFinishPurchase() {
    this.props.history.push('/payment-details')
  }

  render() {
    return (
      <section style={mainSectionStyle}>

        <p style={headerStyle}>SEU CARRINHO DE COMPRAS</p>

        <section style={cartSectionStyle}>
          <List verticalAlign='middle' size="big">
            <List.Item>
              <Image src='/img/capsule_mhw.jpg' />
              <List.Content>
                <List.Header style={listHeaderStyle}>Monster Hunter: World</List.Header>
                <List.Description style={listDescriptionStyle}>R$: {this.state.mhPrice}</List.Description>
              </List.Content>
            </List.Item>

            <Divider inverted />

            <List.Item>
              <Image src='/img/capsule_re3.jpg' />
              <List.Content>
                <List.Header style={listHeaderStyle}>Resident Evil 3</List.Header>
                <List.Description style={listDescriptionStyle}>R$: {this.state.re3Price}</List.Description>
              </List.Content>
            </List.Item>

            <Divider inverted />

            <List.Item>
              <Image src='/img/capsule_rdr.jpg' />
              <List.Content>
                <List.Header style={listHeaderStyle}>Red Dead Redemption 2</List.Header>
                <List.Description style={listDescriptionStyle}>R$: {this.state.rdr2Price}</List.Description>
              </List.Content>
            </List.Item>

            <Divider inverted />

            <List.Item>
              <List.Content floated="right">
                <List.Header style={listHeaderStyle}>TOTAL</List.Header>
                <List.Description style={listDescriptionStyle}>R$: {this.state.rdr2Price + this.state.mhPrice + this.state.re3Price}</List.Description>
              </List.Content>
            </List.Item>

          </List>

          <Divider inverted />

          <div style={buttonContainerStyle} >
            <Button
              color="green"
              content='Escolher método de pagamento'
              size="large"
              onClick={this.handleFinishPurchase} />
          </div>

        </section>

      </section >
    )
  }
}

const mainSectionStyle = {
  width: "50vw",
  margin: "4vh auto"
}

const cartSectionStyle = {
  padding: "4vh 1vw",
  backgroundColor: "#102027",
}

const headerStyle = {
  color: "white",
  textAlign: "center",
  marginBottom: "4vh",
  fontSize: "16pt"
}

const listHeaderStyle = {
  color: "white"
}

const listDescriptionStyle = {
  color: "#cfd8dc"
}

const buttonContainerStyle = {
  width: "100%",
  marginTop: "4vh",
  textAlign: "end"
}

export default withRouter(Cart)
