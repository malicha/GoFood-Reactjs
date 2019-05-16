import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import CardHome from './CardHome'
import  Indo from '../../image/indo.png';
import Navbar from '../../component/Navbar'
import {Row, Col} from 'reactstrap'

export default class Home extends Component {
  render() {
    return (
      <div>
         <Navbar name="Go Life"/>
         <div style={{marginTop: 50}}>
           <Row>
             <Col>
             {" "}
            <Link tag={Link} to="/jenis" style={{ textDecoration: "none"}}>
            <CardHome no="1" Title="Go Food" Image={Indo}/>
            </Link>
             </Col>
           </Row>
         </div>
      </div>
    )
  }
}