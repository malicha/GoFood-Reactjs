import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from 'reactstrap';

// const styles = {
//   card: {},
//   media: {},
// };

function CardFood(props) {
  return (
    <div style={{justifyContent: "center", display: "flex", alignItems: "center", marginTop: 30}}>
    <Card style={{width: 350, height: 350}}>
        <CardMedia
          style={{height: 200, widht: 300}}
          image={props.gambar}
        />
        <CardContent>
          <Typography style={{fontWeight: "bold", fontSize: 20}}>
            {props.name}
          </Typography>
          <Typography component="p" style={{fontWeight: "bold"}}>
            Rp {props.harga}
          </Typography>
         <h3>{props.qyt}</h3>
        </CardContent>
        <Button color="danger" onClick={props.plus}>+</Button>{' '}
        <Button color="primary" onClick={props.min}>-</Button>{' '}
    </Card>
    </div>
  );
}

// CardFood.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (CardFood);
