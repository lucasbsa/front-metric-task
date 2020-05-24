import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
   const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          multiline
          placeholder="Name"
          
        //   value={value}
           onChange={handleChange}
        />
        <TextField
          id="standard-textarea"
          label="CPF"
          placeholder="CPF"
          multiline
          style={{marginLeft:'50px'}}
        />
        
      </div>
    </form>
  );
}