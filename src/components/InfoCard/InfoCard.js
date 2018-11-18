import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Drawer from 'components/Drawer/Drawer';

const styles = {
  card: {
    width: '200px',
    height: '180px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '10px'
  },
  title: {
    fontSize: 12,
  },
  number: {
    fontSize: 16,
  },
  pos: {
    fontSize: 12,
    marginBottom: 5,
  },
  desc: {
    fontSize: 12
  }
};

class Info extends Component {
  state = {
    showDrawer: false
  }

  componentDidMount = () => {
    
  }
  clickHandler = () => {
    console.log('Card Clicked')
  }

  render(){
    const { classes, coreData} = this.props;
    const moreData = this.props.coreData.moreData;
    return (
      <>
      <Card onClick={this.clickHandler} className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {coreData.sta}
          </Typography>
          <Typography className={classes.number}>
            {coreData.number}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Application:{coreData.application}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Assignee:{coreData.application}
          </Typography>
          <Typography className={classes.desc}>
            {coreData.shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
            <Drawer number={coreData.number} moreData={moreData}/>
        </CardActions>
      </Card>

    </>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  coreData: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);