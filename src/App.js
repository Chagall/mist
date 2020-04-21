import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Cart from './components/Cart'
import PaymentDetails from './components/PaymentDetails'
import Success from './components/Success'

/*
  ----------------- Component -----------------
*/
export class App extends Component {
  render() {
    return (
      <Router>
        <main style={appStyle}>
          <Menu />
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment-details" component={PaymentDetails} />
          <Route path="/success" component={Success} />
        </main>
      </Router>
    )
  }
}

/*
  ----------------- CSS -----------------
*/
const appStyle = {
  backgroundColor: "#37474f",
  backgroundImage: "linear-gradient(to bottom, #102027, #37474f)",
  height: "100vh",
  width: "100vw",
  padding: "2vh 2vw"
}

export default App
