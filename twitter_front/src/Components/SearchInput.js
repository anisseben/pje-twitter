import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    paper :{
        marginBottom : 10,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height : 40,
        backgroundColor : "#EBECEC",
        width : "70%",
        marginRight : "5px"
    },
    Countpaper:{
        marginBottom : 10,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height : 40,
        backgroundColor : "#EBECEC",
        width : "30%"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      border: "none",
    },
    countInput : {
      marginLeft: theme.spacing(1),
      flex: 1,
      border: "none",
      paddingLeft : 10
    },
    iconButton: {
      padding: 10,
    },
  }));


export default function SearchInput(props) {
    const classes = useStyles();
    const [search, setSearch] = useState({query : "", count : 100});

    return (
      <div className = "searchBar">
        <Paper className={classes.paper}>
            <IconButton  className={classes.iconButton} aria-label="search" onClick={() => {props.handleSubmit(search)}}>
                <SearchIcon />
            </IconButton>
            <TextField
                variant="standard" 
                InputProps={{
                  disableUnderline: true,
                }}
                className={classes.input}
                placeholder="Search Tweets..."
                inputProps={{ 'aria-label': 'search Tweets' }}
                onChange={event=>{setSearch({...search, query : event.target.value})}}
            />
        </Paper>
        <Paper className={classes.Countpaper}>
          <TextField
              variant="standard" 
              InputProps={{
                disableUnderline: true,
              }}
              className={classes.countInput}
              placeholder="Number of Tweets..."
              inputProps={{ 'aria-label': 'search Tweets' }}
              onChange={event=>{setSearch({...search, count : event.target.value})}}
            />
          </Paper>
      </div>
        )
}