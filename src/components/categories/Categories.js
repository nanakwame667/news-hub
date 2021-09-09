import React from 'react';

import './Categories.css';
function Categories(props) {
    return (
        <div className="categories">
            <div className="cate">
                <h1 style={{fontSize:32}}>CATEGORIES</h1>
                <div className="sub-cate">
                    <div className="cate-1">
                        <p>Tech</p>
                    </div>
                    <div className="cate-2">
                        <p>Fashion</p>
                    </div>
                </div>
                <div className="sub-cate">
                    <div className="cate-3">
                        <p>Sports</p>
                    </div>
                    <div className="cate-4">
                        <p>Economics</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;