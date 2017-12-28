import React,{Component} from 'react';
import imageLogo from '../../logo.svg';
import './style.css'

export default class Hello extends Component{
    getLogo(){
        return(
            <div>
                <a><img src={imageLogo} /></a>
            </div>
        )
    }
    getTitle(){
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/">Hacker News</a>
            </div>
        )
    }
    getNav(){
        let navLinks = [
        {
          name:'new',
          url:'newest'
        },
        {
          name: 'comments',
          url: 'newcomments'
        },
        {
          name: 'show',
          url: 'show'
        },
        {
          name: 'ask',
          url: 'ask'
        },
        {
          name: 'jobs',
          url: 'jobs'
        },
        {
          name: 'submit',
          url: 'submit'
        }];

        return (
            <div className='newsHeader-nav'>
            {
                navLinks.map((nav)=>{
                    return (
                        <a key = {nav.url} className='newsHeader-navLink newsHeader-textLink' href={"https://news.ycombinator.com/" + nav.url}>
                           {nav.name}
                        </a>
                    )
                })
            }
            </div>
        )
    }

    getLogin(){
        return (
            <div className = "newsHeader-login">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?goto=news">login</a>
            </div>
        )
    }
    render(){
        return (
            <div className="newsHeader">
                 {this.getLogo()}
                 {this.getTitle()}
                 {this.getNav()}
                 {this.getLogin()}
            </div>
        )
    }
}