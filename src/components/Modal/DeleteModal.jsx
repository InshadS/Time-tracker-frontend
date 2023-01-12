import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import * as MdIcons from 'react-icons/md';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DeleteModal = ({ handleDelete }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MdIcons.MdDeleteForever
        onClick={handleClickOpen}
        style={{ cursor: 'pointer' }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{'Do you want to delete task?'}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DeleteModal;
