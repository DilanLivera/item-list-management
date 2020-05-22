import React from 'react';
import useInputState from '../hooks/useInputState';
import useSelectState from '../hooks/useSelectState';
import { TextField, Select, MenuItem, Grid } from '@material-ui/core';
import ItemPriority from '../constants/Priority';

const styles = {
  paper: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'whitesmoke'
  },
  form: {
    width: '100%',
    display: 'flex'
  }
};

function EditItemForm({editItem,id, priority, description, crossedOff, toggleIsEditing}) {
  const [value, handleValueChange, resetValue] = useInputState(description);
  const [newPriority, handlePriorityChange, resetPriority] = useSelectState(priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = { id : id, description : value, priority : newPriority, crossedOff: crossedOff };
    editItem(item);
    resetValue();
    resetPriority();
    toggleIsEditing();
  }

  // TODO : Add a limit for the input. (eg. task length is 100 characters)

  return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <Grid item xs={3} md={2}>
          <Select  value={newPriority}  onChange={handlePriorityChange} >
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
            onChange={handleValueChange} 
            autoFocus/>
        </Grid>
      </form>
  );
}

export default EditItemForm;
