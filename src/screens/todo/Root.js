import React from 'react';
import {
    Grid,
    Container
} from '@material-ui/core';

import TodoForm from './Form';
import TodoList from './List';

export default function Todo() {

  return (
    <Container fixed style={{backgroundColor: '#cfe8fc'}}>
        <Grid container spacing={2}>
            <TodoForm></TodoForm>
            <TodoList></TodoList>
        </Grid>
    </Container>
  );
}