import React from 'react'
import { Link } from 'react-router-dom';
import Livingroom1 from './Livingroom1';
import Kitchenrooom1 from './Kitchenrooom1';
import Bedroom1 from './Bedroom1';
export const Home_Decor = () => {
    return (
      <div className='home decor'>
        <h1>home decor</h1>
      </div>
    );
  };
  
  export const Living_room= () => {
    return (
      <Link to='/living room'>
          <div className='home decor'>
        <Livingroom1/>
      </div>
      </Link>
    
    );
  };
  
  export const Kitchen_dining= () => {
    return (
      <Link to='/kitchen room'>
         <div className='home decor'>
        <Kitchenrooom1/>
      </div>
      </Link>
     
    );
  };
  
  export const Bedroom= () => {
    return (
      <Link to='/bedroom'>
        <div className='home decor'>
       <Bedroom1/>
      </div>
      </Link>
      
    );
  };
  