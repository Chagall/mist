import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Image } from 'react-bootstrap'
import { withRouter } from "react-router-dom"

class Menu extends Component {
  handleSelect(eventKey) {
    switch (eventKey) {
      case '/':
        this.props.history.push("/");
        break;
      case '/login':
        this.props.history.push("/login");
        break;
      case '/cart':
        this.props.history.push("/cart");
        break;
      case '/payment-details':
        this.props.history.push("/payment-details");
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Navbar variant="dark" expand="lg" style={navbarStyle} className="justify-content-between" onSelect={k => this.handleSelect(k)}>

        <Navbar.Brand >
          <Nav.Item>
            <Nav.Link eventKey="/">
              <Image
                src="/img/logo.svg"
                alt="Mist store logo"
                style={navbarLogoStyle} />
            </Nav.Link>
          </Nav.Item>
        </Navbar.Brand>

        <Nav>
          <Form style={formStyle}>
            <FormControl size="lg" type="text" placeholder="Pesquisar na loja..." />
          </Form>
        </Nav>

        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="/cart">
              <Image src="./img/shopping_cart.svg" style={navbarIconsStyle} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="/login">
              <Image src="./img/account_circle.svg" style={navbarIconsStyle} />
            </Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar>
    )
  }
}

const navbarStyle = {
  paddingTop: "1vh",
  paddingBottom: "1vh",
  width: "70vw",
  margin: "0 auto",
  backgroundColor: "#00b8d4"
}

const navbarLogoStyle = {
  width: "32px",
  height: "32px",
  marginLeft: "1vw",
}

const navbarIconsStyle = {
  width: "32px",
  height: "32px",
  marginLeft: "1vw"
}

const formStyle = {
  width: "30vw"
}

export default withRouter(Menu)
