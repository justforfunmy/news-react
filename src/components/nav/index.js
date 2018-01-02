import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu:[{
                text:'home',
                path:'/'
            },{
                text:'clock',
                path:'/clock'
            }]
        }
    }

    render(){
        return(
            <ul>
                {
                    (this.state.menu).map((item,index)=>{
                        return (
                            <li key={index}><Link to={item.path}>{item.text}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }
}