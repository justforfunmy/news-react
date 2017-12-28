import React,{Component} from 'react'
import NewsHeader from '../header'
import NewsItem from '../item'
import './style.css'
export default class NewsList extends Component{
    render(){
        
        return (
            <div className = "newsList">
                <NewsHeader />
                <div className="newsList-newsItem">
                    {
                        (this.props.items).map(function(item, index) {
                            return (
                                <NewsItem key={item.id} item={item} rank={index+1} />
                                );
                        })
                    }
                </div>
            </div>
        )
    }
}