import React, { Component } from 'react'
import database from '../database/database'
import Navbar from '../component/Navbar'
import {Col, Row} from 'reactstrap'
import Cards from '../component/CardJenis/Card';

export default class DashJenis extends Component {
  render() {
    return (
      <div>
        <Navbar name="Go Food"/>
          <div>
            <Row
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "space-around"
            }}>
            {database.map(isi => {
              return(
                <Col xs="6" xm="12" xl="4">
                <Cards isi={isi}/>
                </Col>
              )
            })}
            </Row>
          </div>
      </div>
    )
  }
}