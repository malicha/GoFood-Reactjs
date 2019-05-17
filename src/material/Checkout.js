import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import CardCheckout from '../component/CardCheckout'
import Navbar from '../component/Navbar'

export default class Checkout extends Component {
    componentWillMount(){
        const get = sessionStorage.getIsi("order");
        const getTotal = sessionStorage.getIsi("total");
        const convert = JSON.parse(get);
        const convertTotal = JSON.parse(getTotal);
        console.log(convert);
        this.setState
    }

  render() {
    return (
      <div>
          <Navbar name="Checkout"/>
          <div>
         <Row>
          <Col xs="6">
            <CardCheckout/>
          </Col>
        </Row>
         </div>
      </div>
    )
  }
}
