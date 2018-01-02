import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

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
            },{
                text:'learn',
                path:'/learn'
            }]
        }
    }

    render(){
        return(
            <ul className='menu'>
                {
                    (this.state.menu).map((item,index)=>{
                        return (
                            <li key={index}><Link to={item.path} className={this.props.activeIndex == index+1?'active':'normal'+' normalize'}>{item.text}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }
}