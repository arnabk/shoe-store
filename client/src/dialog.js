import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import StoreIcon from '@material-ui/icons/StoreTwoTone';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';import ShoeRow from './shoe-row';

export default ({ title, data, handleClose }) => (
  <Dialog
    open
    onClose={handleClose}
    scroll="paper"
    fullWidth
  >
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton color="inherit">
          <StoreIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
    <DialogContent>
      <DialogContentText>
        <ShoeRow data={data} />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);