import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import CardCheckout from '../component/CardCheckout'
import Navbar from '../component/Navbar'

export default class Checkout extends Component {
      componentWillMount(){
         const getDataFromStorage = sessionStorage.getItem("order")
         const getTotal = sessionStorage.getItem("total")
         const convert = JSON.parse(getDataFromStorage)
         const convertTotal = JSON.parse(getTotal)
         this.setState({
          order:convert,
          total:convertTotal
         })
       
      }
      

      componentDidMount() {
        console.log("ini component didmount");
      }

      state = {
        order:[],
        total:[]
       }

  render() {
    return (
      <div>
          <Navbar name="Checkout"/>
          <div>
         <Row>
         {this.state.order.map(isi =>{
             return(
                <Col xs="12" sm="6" xl="4">
                <CardCheckout
                image={isi.gambar}
                nama={isi.name}
                harga={isi.price}
                qyt={isi.qyt}
                />
              </Col>
             );
         })}
        </Row>
         </div>
         <h3 style={{paddingLeft: 30}}>Total belanja kamu : Rp {this.state.total}</h3>
      </div>
    )
  }
}
