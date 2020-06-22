import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { useContextSprint } from '../../front-metric-task/contexts/contextSprint'
import { useContextBoard } from '../../front-metric-task/contexts/contextBoard'



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectUser({ optionList }) {

  const {
    personNameUserTask,
    setPersonNameUserTask
  } = useContextSprint();

  const { board, setBoard } = useContextBoard();

  const classes = useStyles();
  const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);  


  console.log('nomes setados: ',personNameUserTask)

  const handleChange = (event) => {
    console.log('evento',event.target)
    setPersonNameUserTask(event.target.value);

  };



  return (
    <div style={{ width: '300px' }} >
      <FormControl className={classes.formControl} style={{ width: '300px' }} >
        <InputLabel id="demo-mutiple-checkbox-label">User</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personNameUserTask}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {board[0].listUserBoard.map((name) => (
            <MenuItem key={name.idUser} value={name.name}>
              <Checkbox checked={personNameUserTask.indexOf(name.name) > -1} />
              <ListItemText primary={name.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  );
}
