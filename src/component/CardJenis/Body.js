import React, { Component } from 'react'
import database from '../../database'
import Cards from '../CardJenis/Card'
import {Row, Col} from 'reactstrap'


export default class Body extends Component{
  render(){
    return(
      <div style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}>
        <Row style={{
          justifyContent: "space-around",
          marginTop: 10,
          alignItems: "center",
          display: "flex"
        }}>
          {database.map(isi => {
            return(
              <Col style={{marginTop: 20}} sm="6" xm="12" xl="4">
                <Cards isi={isi}/>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}