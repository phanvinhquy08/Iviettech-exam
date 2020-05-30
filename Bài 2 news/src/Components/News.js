import React, { Component } from 'react';

import { dataNews } from '../data';
import NewsItem from '../Components/NewsItem';

export default class News extends Component {
    render() {
        return (
            <div className="news">
                <h2>SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h2>
                {dataNews.map(data => <NewsItem
                    key={data.id}
                    imgSrc={data.imgSrc}
                    title={data.title}
                    subTitle={data.subTitle}
                    rate={data.rate}
                    content={data.content}
                />)}
            </div>
        )
    }
}
