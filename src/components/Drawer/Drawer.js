import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const styles = {
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
  key:{
    fontSize: 10,
    width: '20%',
    marginRight: '20px'

  },
  value:{
    fontSize: 14
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
    const { classes, moreData, number } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>{number}</ListItem>
          { moreData ? Object.keys(moreData).map((key,index) => (
            <ListItem key={index}>
              <div className={classes.key}>{key}</div>
              <div className={classes.value}>{moreData[key]}</div>
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
  //moreData: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
