import React from 'react';
import Category from '../../components/category/Category';
import Fetured from '../../components/feturedproduct/Fetured';
import Slide from '../../components/slide/Slide';

const Home = () => {
  
    return (
        <div>
           <Slide></Slide>
           <Fetured></Fetured>
           <Category></Category>
        </div>
    );
};

export default Home;