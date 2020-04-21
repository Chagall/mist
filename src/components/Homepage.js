import React, { Component } from 'react'
import { Carousel, Image, Button } from 'react-bootstrap'
import { withRouter } from "react-router-dom"

export class Homepage extends Component {

  constructor(props) {
    super(props)

    this.handleAddToCartClick = this.handleAddToCartClick.bind(this)
  }

  handleAddToCartClick() {
    this.props.history.push("/cart")
  }

  render() {
    return (
      <section>
        <p style={textStyle}>JOGOS EM DESTAQUE</p>

        <Carousel style={carouselStyle}>

          <Carousel.Item>

            <div style={divStyle}>
              <Image
                style={carouselImgStyle}
                src="/img/resident_evil_3.jpeg"
                alt="First slide" />

              <Carousel.Caption style={carouselCaptionStyle}>
                <h3>RESIDENT EVIL 3</h3>

                <span style={tagStyle}>Suspense</span>
                <span style={tagStyle}>Sobrevivência</span>
                <span style={tagStyle}>Single-player</span>

                <p style={priceStyle}>R$: 129,99</p>

                <Button variant="success" onClick={this.handleAddToCartClick}>+ Carrinho</Button>

              </Carousel.Caption>
            </div>

          </Carousel.Item>

          <Carousel.Item>
            <Image
              style={carouselImgStyle}
              src="/img/red_dead_2.jpg"
              alt="First slide" />

            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>RED DEAD REDEMPTION 2</h3>

              <span style={tagStyle}>Ação</span>
              <span style={tagStyle}>Velho Oeste</span>
              <span style={tagStyle}>Mundo Aberto</span>

              <p style={priceStyle}>R$: 249,99</p>

              <Button variant="success" onClick={this.handleAddToCartClick}>+ Carrinho</Button>

            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>
            <Image
              style={carouselImgStyle}
              src="/img/mhw.jpg"
              alt="First slide" />

            <Carousel.Caption style={carouselCaptionStyle}>
              <h3>MONSTER HUNTER: WORLD</h3>

              <span style={tagStyle}>RPG de ação</span>
              <span style={tagStyle}>Cooperativo</span>
              <span style={tagStyle}>Multijogador</span>

              <p style={priceStyle}>R$: 69,99</p>

              <Button variant="success" onClick={this.handleAddToCartClick}>+ Carrinho</Button>

            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>
      </section>
    )
  }
}

const carouselStyle = {
  height: "60vh",
  width: "70vw",
  margin: "0 auto"
}

const carouselImgStyle = {
  height: "60vh",
  width: "70vw",
  margin: "0 auto"
}

const carouselCaptionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)"
}

const tagStyle = {
  borderRadius: "2px",
  backgroundColor: "#00b7d3",
  padding: "0.3vh 0.4vw",
  marginLeft: "0.2vw",
  fontSize: "12pt"
}

const priceStyle = {
  margin: "1vh"
}

const textStyle = {
  color: "white",
  width: "70vw",
  marginTop: "4vh",
  marginBottom: "0.4vh",
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: "16pt"
}

const divStyle = {
  display: "flex",
  flexDirection: "row"
}

export default withRouter(Homepage)
