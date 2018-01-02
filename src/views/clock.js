import React,{Component} from 'react'
import Nav from '../components/nav'
import Clock from '../components/clock'

export default class ClockView extends Component{
    render(){
        return (
            <div className="content">
                <Nav activeIndex={2}/>
                <Clock interVal = {3}/>
            </div>
        )
    }
}