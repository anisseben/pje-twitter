import  { useStateWithCallbackLazy } from 'use-state-with-callback';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

function Polarity(props) {

    const [value, setPolarity] = useStateWithCallbackLazy(props.tweet);
    const handleChange = (event) => {

        setPolarity({...value, polarity : event.target.value},
            (value) => {    
        axios.post("/correct", value)
        .then(response => {
        }, (error) => {
          console.log(error);
        });
        }
    )
    }

    const style = {
        color : value.polarity === 4 ? "#21b6ae" : value.polarity === 0 ? "red" : null ,
        borderColor: value.polarity === 4 ? "#21b6ae" : value.polarity === 0 ? "red" : null
    }

    return (
        value.polarity === -1 ? <Button variant="outlined" disabled > None </Button> :
    <Select value = {value.polarity} style = {style} onChange={handleChange}>
        <MenuItem value = {4} style={{borderColor: "#21b6ae", color : "#21b6ae"}}> Positive </MenuItem>
        <MenuItem value = {2} >Neutre</MenuItem>
        <MenuItem value = {0} style={{borderColor: "#21b6ae", color : "red"}}> Negative</MenuItem>
    </Select>
    );}

export default Polarity;