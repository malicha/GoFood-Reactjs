import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

function CardCheckout(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={prps.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nama}
          </Typography>
          <Typography component="p">
            Rp {props.harga}
          </Typography>
          <Typography component="p">
            Total: {props.gyt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

CardCheckout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardCheckout);
