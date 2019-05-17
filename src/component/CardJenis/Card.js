import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
export default class Cards extends Component {
  render() {
    const { image, nama, id } = this.props.isi;
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Card
          tag={Link}
          style={{ textDecoration: "none" }}
          component={Link}
          to={`jenis/${id}`}
          className="cardR"
          style={{ maxWidth: 350, height: 300, borderRadius: 5, paddingRight: 10}}
        >
          <CardImg
            style={{ height: 200, width: 350}}
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle
              style={{color: "green"}}
            >
              {nama}
            </CardTitle>
          
          </CardBody>
        </Card>
      </div>
    );
  }
}