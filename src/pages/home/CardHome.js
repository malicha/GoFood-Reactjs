import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import CardContent from '@material-ui/core/CardContent'
// import './CardHome.css'

const styles = {
  card: {
    width: 350,
  },
  media: {
    height: 300,
  },
  image: {
    width: 10,
    height: 20,
  }
};

function CardHome(props) {
  const { classes } = props;
  return ( 
        <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.Image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      );
    }
  
CardHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardHome);