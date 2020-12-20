import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid,
    Typography,
    TextField
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import * as TodoAction from '../../actions/TodoAction';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const TodoForm = ({ dispatch }) => {
  const classes = useStyles();

  const [todoName, setTodoName] = useState('');

  const AddTodo = async () => {
    const response = await dispatch(TodoAction.addTodo(todoName));
    if(!response.status){
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {response.msg}
        </Alert>
      )
    }
  }

  return (
    <Grid item xs={12} md={4}>
        <Typography variant="h6" className={classes.title}>
            Thêm công việc
        </Typography>
        <TextField id="outlined-basic" label="Tên công việc" variant="outlined" style={{width: "100%"}}
          onChange={(event)=>{
            const value = event.target.value;
            setTodoName(value);
          }}
        />
        <br/>
        <br/>
        <Button variant="contained" onClick={() => {AddTodo()}}>Thêm</Button>
    </Grid>
  );
}

export default connect()(TodoForm);