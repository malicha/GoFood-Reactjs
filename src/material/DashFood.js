import React, { Component } from 'react'
import database from '../database/database'
import CardFood from "../component/CardFood/CardFood";
import {Link} from 'react-router-dom';
import Navbar from '../component/Navbar';
import {Row,Col} from 'reactstrap'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow';
import {Button} from 'reactstrap'

export default class DashFood extends Component {
  componentWillMount(){
    const data = database.find(
      isi => isi.id === this.props.match.params.id
    );

    const dataFood = data.foods;
    this.setState({
      fillfood: dataFood
    });
    console.log(dataFood);
    
    const addQyt = dataFood.forEach(o =>{
      o.qyt = 0;
    });
    console.log(addQyt)

    console.log(this.state.fillfood)
  }

  plus = id =>{
    const {Order, fillfood} =this.state;
    const fillFoods = fillfood.find(isi => isi.id === id);
    const fillOrder = Order.find( isi => isi.id === id);
    this.addPrice(fillFoods.harga);
    fillfood.map(o => {
      if( o.id === fillFoods.id){
        const updateIntern = ( o.qyt = fillFoods.qyt + 1);
      }
    });
    if(fillOrder === undefined){
      const update = {
        ...fillFoods,
        qyt: 1,
        price: fillFoods.harga
      };
      this.setState({
        Order : [...Order, update]
      });

      return;
    }
    if(fillFoods.id === fillOrder.id){
      const update = {
        ...fillOrder,
        qyt: fillOrder.qyt + 1,
        price: fillOrder.price + fillOrder.harga
      };
      this.setState({
        Order: Order.map( o => (o.id === fillOrder.id ? update : o ))
      });
      return;
    }
  };

  min = id => {
    const {Order, fillfood} = this.state;
    const fillOrder = Order.find(item => item.id === id);
    const fillFods = fillfood.find(item => item.id === id);
    if(fillFods.qyt === 0 ){
      return;
    }else{
      if(fillOrder.qyt === 1) {
        const updateFoods = {...fillFods, qyt: fillFods.qyt - 1};
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = Order.filter(item => item.id !== id);
        this.setState({
          Order: filterOrder
        });
      }else{
        const updateOrders ={
          ...fillOrder,
          qyt: fillOrder.qyt - 1,
          price: fillOrder.price - fillOrder.harga
        };
        const updateFoods = {...fillFods, qyt: fillFods.qyt - 1};
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o)),
          Order : Order.map(o => (o.id === fillOrder.id ? updateOrders : o)),
        });
      }
    }
    this.minPrice(fillFods.harga);
  };

  addPrice = harga =>{
    this.setState({
      total: this.state.total + harga
    });
  };

  minPrice = harga => {
    this.setState({
      total : this.state.total - harga
    });
  };

  pay = () => {
      const {Order, total} = this.state;
      sessionStorage.setItem("order", JSON.stringify(Order));
      sessionStorage.setItem("total", JSON.parse(total));
  };
  
  state={
    fillfood : [],
    Order: [],
    total: 0
  }


  render() {
    return (
      <div>
        <Navbar name="Go Food"/>
      <div style={{marginTop: 20}}>
        <Row>
        {this.state.fillfood.map(menu => {
          return(
            <Col sm= "4" xl="4">
              <CardFood
              name={menu.name}
              gambar={menu.gambar}
              harga={menu.harga}
              qyt={menu.qyt}
              min={() => this.min(menu.id)}
              plus={() => this.plus(menu.id)}
              />
            </Col>
          )
        })}
        </Row>
      </div>
      <div style={{margin: 20, flexDirection: 'column', alignItems: "center"}}>
      <h4>Orderan kamu :</h4>
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}>Order</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}>Jumlah</TableCell>
            <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.state.Order.map(Orders => (
            <TableRow>
            <TableCell align="right">{Orders.name}</TableCell>
            <TableCell align="right">{Orders.qyt}</TableCell>
            <TableCell align="right">Rp {Orders.price}</TableCell>
            </TableRow>
          ))} 
            <TableHead>
            <TableRow>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}>Sub Total</TableCell>
            </TableRow>
            </TableHead>
            <TableHead>
            <TableRow>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}></TableCell>
              <TableCell align="right" style={{fontWeight: "bold", fontSize: 15}}>Rp {this.state.total}</TableCell>
            </TableRow>
            </TableHead>
        </TableBody>
      </Table>
    </Paper>
    <div style={{margin: 20}}>
      <Button color="success" component={Link} to="/checkout" onClick={this.pay}>Bayar Sekarang</Button>
    </div>
      </div>
      </div>
    )
  }
}
