import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {
    Folder as FolderIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Avatar,
    IconButton,
    Grid,
    Typography,
} from '@material-ui/core';

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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const TodoList = ({dispatch, todos}) => {
  const classes = useStyles();
  const [data, setData]=useState([]);

  useEffect(() => {
    if(todos.change){
      dispatch(TodoAction.getTodos());
    }
  },[todos.change]);

  useEffect(() => {
    setData(todos.data)
  },[todos.data])

  return (
    <Grid item xs={12} md={8}>
        <Typography variant="h6" className={classes.title}>
            Danh sách công việc
        </Typography>
        <div className={classes.demo}>
            <List>
            {
              data.map((value, index) => {
                return(
                  <ListItem key={value.id}>
                    <ListItemAvatar>
                        <Avatar>
                        <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={value.name}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })
            }
            </List>
        </div>
    </Grid>
  );
}

export default connect(mapStateToProps)(TodoList);