import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Hidden } from '@material-ui/core';


const styles = {
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  key:{
    fontSize: 10,
    width: '30%',
    marginRight: '20px',
    overflow: 'hidden',

  },
  value:{
    width: '60%',
    fontSize: 14,
    overflow: 'hidden',
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    show: false,
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
        show: !prevState.show
    }))
  };

  render() {
    const { classes, serviceData, number } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>{number}</ListItem>
          <ListItem >
              <div className={classes.key}>short description</div>
              <div className={classes.value}>{this.props.shortDescription}</div>
            </ListItem>
          { serviceData ? Object.keys(serviceData).map((key,index) => (
            <ListItem key={index}>
              <div className={classes.key}>{key}</div>
              <div className={classes.value}>{serviceData[key]}</div>
            </ListItem>
          )) : null}
        </List>
      </div>
    );
    return (
      <div>
        <Button size="small" onClick={this.toggleDrawer}>Learn More</Button>
        <Drawer anchor="right" open={this.state.show} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  serviceData: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
