import React from 'react';
import useToggleState from '../hooks/useToggleState';
import EditItemForm from '../EditItemForm/EditItemForm';
import { ListItem, ListItemText, Grid, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// TODO : Add an edit button
// TODO : Add a delete button
// TODO : Add onclick strike-through functionality

function Item({ id, description, priority, crossedOff, removeItem, toggleItem, editItem }) {
  const styles = {
    ListItem: {
      marginTop: 10,
      padding: 0,
      paddingBottom: 5,
      borderBottom: '1px solid gainsboro',
    },
    highPriority: {
      color: 'white',
      paddingLeft: '0.4em',
      marginRight: '0.8em',
      backgroundColor: 'rgba(220,20,60,0.6)',
      borderRadius: 2
    },
    mediumPriority: {
      color: 'white',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.8em',
      backgroundColor: 'rgba(0,128,0,0.6)',
      borderRadius: 2
    },
    lowPriority: {
      color: 'white',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginRight: '0.8em',
      backgroundColor: 'rgba(255,165,0,0.6)',
      borderRadius: 2
    },
    todoDescription: {
      color: "grey",
      textDecoration: crossedOff ? "line-through" : "",
      cursor: "pointer"
    },
    ListItemSecondaryAction: {
      right: 0
    }
  };

  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem style={styles.ListItem}>
      {
        isEditing 
          ? <EditItemForm id={id} 
                          priority={priority} 
                          description={description} 
                          crossedOff={crossedOff} 
                          editItem={editItem} 
                          toggleIsEditing={toggleIsEditing}/>
          : (<>
              <Grid container>
                <Grid item xs={3} md={2}>
                  <ListItemText style={styles[`${priority.toLowerCase()}Priority`]}>{priority}</ListItemText>
                </Grid>
                <Grid item xs={9} md={10}>
                  <ListItemText style={styles.todoDescription} onClick={() => toggleItem(id)}>{description}</ListItemText>
                  <ListItemSecondaryAction style={styles.ListItemSecondaryAction}>
                    <IconButton aria-label="Delete" onClick={() => removeItem(id)} >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction >
                </Grid>
              </Grid>
            </>)
      }
    </ListItem>
  );
}

export default Item;