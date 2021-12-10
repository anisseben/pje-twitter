import React, { useState } from 'react';
import SearchInput from "./SearchInput";
import TweetsTable from "./TweetsTable";
import TweetsProportions from "./TweetsProportions.js"
import ClassifierForm from "./ClassifierForm.js"
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';



const useStyles = makeStyles({
  loading:{
    margin: '10px', 
    color : '#1976d2'
  },
});

function Home() {

  const classes = useStyles();
  const [tweets, setTweets] = useState({
    tweets : null,
    stat : null,
    activateClassifier : true,
    loadingTweets : false,
    loadingStats : false
  })

  const get_tweets = (search) => {
    setTweets({
      ...tweets,
      loadingTweets : true
    });
    const {query, count} = search;
    axios.get(`/search/${query}/${count}`)
    .then((response) => {
      setTweets({
        ...tweets,
        activateClassifier : false,
        tweets : response.data,
        loadingTweets : false
      });
    }, (error) => {
      console.log(error);
    });
  }

  const handleSubmit = (classifier) =>{
    setTweets({
      ...tweets,
      loadingTweets : true,
      loadingStats : true
    });
    let query;
    const {name, k, c, wordsLength, frequency, uniGrammes, biGrammes} = classifier
    if (name === "KNN"){
      query = `/classifier/KNN/${k}/naiveDistance/${c}`
    }
    if (name === "keyWords"){
      query = `/classifier/keyWords/${c}`
    }
    if (name === "naiveBayes"){
      query = `/classifier/naiveBayes/${frequency}/${wordsLength}/${uniGrammes}/${biGrammes}/${c}`
    }
    axios.get(query)
    .then(response => {
      setTweets({
        ...tweets,
        tweets : response.data.tweets,
        stat: response.data.stats,
        loadingTweets : false,
        loadingStats : false
      });
      
    }, (error) => {
      console.log(error);
    });
  }


  return (
    <div className="home-container">
        <div className="tweet-div">
          <div className="tweet-container">
            <div className="search-tweets">  
              <SearchInput handleSubmit = {get_tweets}/>
            </div>
            <div className="tweets">
            {tweets.loadingTweets === true ? <CircularProgress className = {classes.loading}  disableShrink />  : tweets.tweets === null ? null : <TweetsTable Alltweets = {tweets.tweets} />}
            </div>
        </div>
        </div>
        <div className="classifier-container">
          <ClassifierForm handleSubmit = {handleSubmit} classify = {tweets.activateClassifier}/>
          <div>      
            {tweets.loadingStats === true ? <CircularProgress className = {classes.loading} disableShrink />  : tweets.stat === null ? null : <TweetsProportions stats = {tweets.stat}/>}
          </div> 
        </div>
    </div>
    );
  }
  
  export default Home;
  