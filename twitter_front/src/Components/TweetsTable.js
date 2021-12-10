import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Polarity from "./Polarity.js"

const columns = [
    {id: 'Tweet', label: 'Tweets', minWidth: 200},
    {id: 'Sentiment', label: 'Sentiments', minWidth: 100}
];

const useStyles = makeStyles({
  root:{
    width: '100%', 
  },
  container:{
    maxHeight: 440,
  },
  column :{
    textAlign : "center",
    fontSize : "17px",
    fontWeight : "bold"
  }
});

export default function TweetsTable(props){

  const classes = useStyles();
  const rows = props.Alltweets
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.column}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {rows === null ? null : 
           <TableBody>
              {rows.map((row) => {
                  return (
                      <TableRow  role="checkbox" tabIndex={-1} key={row.id}>
                          <TableCell>
                              {row.tweet}
                          </TableCell>
                          <TableCell>
                            <Polarity key={JSON.stringify(props)} tweet = {row}/>
                          </TableCell>
                      </TableRow>
                  );
                  })}
            </TableBody>
         } 
        </Table>
      </TableContainer>
      
    </Paper>
  );
}