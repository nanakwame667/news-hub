import React from 'react';

import News from '../components/News/News';
import Categories from '../components/categories/Categories';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
function HomeScreen(props) {
    return (
        <div>
            <Header/>
            <News/>
            <Categories/>
            <Footer/>
        </div>
    );
}

export default HomeScreen;