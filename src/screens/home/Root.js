import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

}));

export default function HomeRoot() {
  const classes = useStyles();

  return (
    <Container fixed style={{backgroundColor: '#cfe8fc'}}>
        <Typography variant="h1" className={classes.title}>
            Hello
        </Typography>
    </Container>
  );
}
