import React, { useEffect } from 'react';
import useItemState from '../hooks/useItemState';
import ItemList from '../ItemList/ItemList';
import ItemForm from '../ItemForm/ItemForm';
import { Toolbar, Typography, AppBar, Paper, Grid } from '@material-ui/core';

const styles = {
  paper: {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: 'rgba(26,107,255,1)' // linear-gradient(150deg, rgba(26,107,255,1) 0%, rgba(215,0,255,1) 100%);
  },
  appBar: {
    height: 64
  },
  grid: {
    marginTop: '1rem'
  }
};

function ItemListApp({itemList}) {
  const initialItems = JSON.parse(window.localStorage.getItem("items")) || itemList;
  const [items, addItem, removeItem, toggleItem, editItem] = useItemState(initialItems);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <Paper style={styles.paper} elevation={0}>
      <AppBar color='primary' position='static' style={styles.appBar}>
        <Toolbar>
          <Typography color='inherit'>Item List Management</Typography>
        </Toolbar>
      </AppBar>
      <Grid style={styles.grid} container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <ItemForm addItem={addItem} />
          <ItemList items={items} removeItem={removeItem} toggleItem={toggleItem} editItem={editItem} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemListApp;