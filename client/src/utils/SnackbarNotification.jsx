import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(props.open);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        props.setOpen(false);
      return;
    }

    props.setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
 {props.severity==="success" &&  
      <Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
            {props.message}
          </Alert>
          
      </Snackbar>}
      {props.severity==="info" &&  
      <Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
          
          
          <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
            {props.message}
          </Alert>
          
      </Snackbar>}
      {props.severity==="warning" &&  
      <Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
          
          
          <Alert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
            {props.message}
          </Alert>
          
      </Snackbar>}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
