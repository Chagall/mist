import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Segment, Form, Message, Header } from 'semantic-ui-react'

export class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      messageStyle: {
        display: "none"
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ messageStyle: { display: "block" } });
  }

  render() {
    return (
      <section style={sectionStyle}>
        <Segment style={segmentStyle}>
          
          <p style={headerStyle}>LOGIN</p>

          <Form inverted onSubmit={this.handleSubmit}>

            <Form.Input fluid label='Nome de usuário' type="email" />
            <Form.Input fluid label='Senha' type="password" />
            <Form.Button style={submitButtonStyle}>Iniciar sessão</Form.Button>

            <Message
              style={this.state.messageStyle}
              success
              header='Sessão'
              content="Iniciada com sucesso" />

          </Form>
        </Segment>
      </section>
    )
  }
}

const sectionStyle = {
  width: "30vw",
  marginTop: "4vh",
  marginLeft: "auto",
  marginRight: "auto",
}
const segmentStyle = {
  padding: "4vh 2vw",
  backgroundColor: "#102027"
}

const headerStyle = {
  textAlign: "center",
  color: "white",
  fontSize: "16pt"
}

const submitButtonStyle = {
  textAlign: "center",
  backgroundColor: "#00b7d3",
  color: "white",
  padding: "2vh 1vw",
  marginTop: "4vh",
  width: "100%",
  fontSize: "14pt"
}

export default withRouter(Login)
