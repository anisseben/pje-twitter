import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    select:{
      width: "200px",
    },
    input : {
      margin : "10px"
    },
    button :{
      marginBottom : "5px"
    }
  });

function ClassifierForm(props) {

    const classes = useStyles();

    const handleChange = (event) => {
        setClassifier({...classifier,name : event.target.value});
      };
    
      const handleCheck = (event) => {
        setClassifier({
          ...classifier,
          [event.target.name]: event.target.checked,
        });
      };
    
      const handleInput = (event) => {
        setClassifier({
          ...classifier,
          [event.target.name]: event.target.value,
        });
      };

    const [classifier, setClassifier] = useState({
        name : "KNN",
        k : 3,
        c : 3,
        wordsLength : 3,
        frequency : false,
        uniGrammes : false,
        biGrammes : false,
        })
        
    return (
        <div className="form">
            <InputLabel>Classifier</InputLabel>
            <Select
            className={classes.select}
            value = {classifier.name}
            onChange={handleChange}
            >
                <MenuItem value={"KNN"}>KNN</MenuItem>
                <MenuItem value={"keyWords"}>Key Words</MenuItem>
                <MenuItem value={"naiveBayes"}>Naive Bayes</MenuItem>
            </Select>
            <div className = "form-inputs">
                <TextField
                    style={{margin: '5px'}}
                    id="outlined-required"
                    label="Number of neighbors"
                    defaultValue="3"
                    name = "k"
                    disabled = {classifier.name !== "KNN"}
                    onChange={handleInput}
                />
                <TextField
                    style={{margin: '5px'}}
                    id="outlined-required"
                    label="Words Length"
                    defaultValue="3"
                    name = "wordsLength"
                    disabled = {classifier.name !== "naiveBayes"}
                    onChange={handleInput}
                />
                <TextField
                    style={{margin: '5px'}}
                    id="outlined-required"
                    label="Folds number"
                    defaultValue="3"
                    name = "c"
                    onChange={handleInput}
                />
            </div>
            <div className = "form-selects">
                <FormControlLabel disabled = {classifier.name !== "naiveBayes"} control={<Checkbox 
                name = {"frequency"}  onChange = {handleCheck}/>} label="Frequency" />
                <FormControlLabel disabled = {classifier.name !== "naiveBayes"} control={<Checkbox 
                name = {"uniGrammes"}  onChange = {handleCheck}/>} label="uni-grammes" />
                <FormControlLabel disabled = {classifier.name !== "naiveBayes"} control={<Checkbox 
                name = {"biGrammes"}  onChange = {handleCheck}/>} label="bi-grammes" />
            </div>
            <Button 
            disabled = {props.classify}
            className={classes.button} 
            variant="contained"
            onClick={() => {props.handleSubmit(classifier)}}
            >
            Classify
            </Button>
        </div>   
      );}
  
  export default ClassifierForm;


  