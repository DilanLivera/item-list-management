import React from 'react';
import useInputState from '../hooks/useInputState';
import useSelectState from '../hooks/useSelectState';
import { Paper, TextField, Select, MenuItem, Grid } from '@material-ui/core';
import ItemPriority from '../constants/Priority';

const styles = {
  paper: {
    padding: 10,
    marginBottom: 10
  },
  form: {
    width: '100%',
    display: 'flex'
  }
};

function ItemForm({addItem}) {
  const [value, handleValueChange, resetValue] = useInputState("");
  const [priority, handlePriorityChange, resetPriority] = useSelectState(ItemPriority.Low);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(value, priority);
    resetValue();
    resetPriority();
  }

  // TODO : Add a limit for the input. (eg. task length is 100 characters)

  return (
    <Paper style={styles.paper}>
      <Grid container>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Grid item xs={3} md={2}>
          <Select  value={priority}  onChange={handlePriorityChange} >
            <MenuItem value={ItemPriority.Low}>{ItemPriority.Low}</MenuItem>
            <MenuItem value={ItemPriority.Medium}>{ItemPriority.Medium}</MenuItem>
            <MenuItem value={ItemPriority.High}>{ItemPriority.High}</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={9} md={10}>
          <TextField 
            value={value}
            placeholder="item" 
            fullWidth
            onChange={handleValueChange} />
        </Grid>
      </form>
      </Grid>
    </Paper>
  );
}

export default ItemForm;
