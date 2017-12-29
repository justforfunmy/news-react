import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsList from './components/list'
import Clock from './components/clock'

class App extends Component {
  render() {
      let allData = [{
          "by" : "bane",
          "descendants" : 49,
          "id" : 11600137,
          "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
          "score" : 56,
          "time" : 1461985332,
          "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
          "type" : "story",
          "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
      },{
        "by" : "bane",
        "descendants" : 49,
        "id" : 11245151,
        "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
        "score" : 56,
        "time" : 1461985332,
        "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
        "type" : "story",
        "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
    }]
    return (
      <div className="content">
          <NewsList items = {allData}/>
          <Clock interVal = {3}/>
      </div>
      
    );
  }
}

export default App;
