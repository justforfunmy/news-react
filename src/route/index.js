import React,{Component} from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'


import Home from '../views/home'
import Clock from '../views/clock'

export default class RouterView extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/clock' component={Clock} />
                </div>
            </Router>
        )
    }
}