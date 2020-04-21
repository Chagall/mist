import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Form, Select } from 'semantic-ui-react'

const months = [
  { key: 1, text: '01', value: 1 },
  { key: 2, text: '02', value: 2 },
  { key: 3, text: '03', value: 3 },
  { key: 4, text: '04', value: 4 },
  { key: 5, text: '05', value: 5 },
  { key: 6, text: '06', value: 6 },
  { key: 7, text: '07', value: 7 },
  { key: 8, text: '08', value: 8 },
  { key: 9, text: '09', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
]

const years = [
  { key: 2020, text: '2020', value: 2020 },
  { key: 2021, text: '2021', value: 2021 },
  { key: 2022, text: '2022', value: 2022 },
]

const countries = [
  { key: 'br', text: 'Brasil', value: 'br' },
  { key: 'other', text: 'Outro...', value: 'other' },
]

export class PaymentDetails extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.history.push('/success')
  }

  render() {
    return (
      <section style={mainSectionStyle}>
        <p style={headerStyle}>FORMA DE PAGAMENTO</p>

        <section style={paymentSectionStyle}>

          <Form inverted onSubmit={this.handleSubmit}>
            <p style={infoHeaderStyle}>DADOS DO CARTÃO</p>

            <Form.Group>
              <Form.Input width={10} fluid label='Número do cartão' placeholder='4984 5254 4875 8987' control='input' type="text" maxlength={16} />
              <Form.Input width={2} fluid label='Mês' control={Select} options={months} />
              <Form.Input width={2} fluid label='Ano' control={Select} options={years} />
              <Form.Input width={2} fluid label='Código' placeholder='347' control='input' type="number" max={999} />
            </Form.Group>

            <p style={infoHeaderStyle}>DADOS DE COBRANÇA</p>

            <Form.Group>
              <Form.Input width={4} label='Nome' placeholder='Eduardo' control='input' type="text" maxlength={20} />
              <Form.Input width={4} label='Sobrenome' placeholder='da Silva' control='input' type="text" maxlength={40} />
              <Form.Input width={8} label='Cidade' placeholder='São Carlos' control='input' type="text" maxlength={40} />
            </Form.Group>

            <Form.Group>
              <Form.Input width={8} label='Endereço' placeholder='Rua Salomão Dibbo, nº 378, apt. 451' control='input' type="text" maxlength={50} />
              <Form.Input width={8} label='Código Postal (CEP)' placeholder='13560-542' control='input' type="text" maxlength={9} />
            </Form.Group>

            <Form.Group>
              <Form.Input width={8} label='País' control={Select} options={countries} />
              <Form.Input width={8} label='Número de telefone' placeholder='(16) 98787-08265' control='input' type="text" maxlength={20} />
            </Form.Group>

            <div style={buttonContainerStyle} >
              <Form.Button
                color="green"
                content='Finalizar compra'
                size="large" />
            </div>

          </Form>
        </section>

      </section>
    )
  }
}

const mainSectionStyle = {
  width: "50vw",
  margin: "4vh auto"
}

const headerStyle = {
  color: "white",
  textAlign: "center",
  marginBottom: "4vh",
  fontSize: "16pt"
}

const infoHeaderStyle = {
  color: "white",
  fontSize: "16pt"
}

const paymentSectionStyle = {
  padding: "4vh 1vw",
  backgroundColor: "#102027",
}

const buttonContainerStyle = {
  width: "100%",
  marginTop: "4vh",
  textAlign: "end"
}

export default withRouter(PaymentDetails)
