import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';

import ServiceIcon from '@material-ui/icons/GroupWork';
import HelpIcon from '@material-ui/icons/Help';
import {Link} from  'react-router-dom';

const classes={
    list: {
        width: '50%',
      },
      fullList: {
        width: '50%',
      }
}



export const sideList = (
    <div className={classes.list}>
      <List>
       
        <ListItem button  component={Link} to='/'>
                 <ListItemIcon>
                     <HomeIcon/>
                </ListItemIcon>
        <ListItemText primary="Home"/>
        </ListItem>

        <ListItem button  component={Link} to='/contact'>
                 <ListItemIcon>
                     <MessageIcon/>
                </ListItemIcon>
        <ListItemText primary="Contact"/>
        </ListItem>


        <ListItem button  component={Link} to='/services'>
                 <ListItemIcon>
                     <ServiceIcon/>
                </ListItemIcon>
        <ListItemText primary="Services"/>
        </ListItem>


        <ListItem button  component={Link} to='/help'>
                 <ListItemIcon>
                     <HelpIcon/>
                </ListItemIcon>
        <ListItemText primary="Help"/>
        </ListItem>



      </List>
      <Divider />
      
    </div>
  );