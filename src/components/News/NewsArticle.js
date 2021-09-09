import React from 'react';

import './NewsArticle.css';
function NewsArticle({data}) {
    return (
        <div>
            <h1>trending</h1>
            <div>
                <div className="news-image">
                    {data.city}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default NewsArticle;