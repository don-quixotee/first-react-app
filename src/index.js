//import react and ReactDom libraries

import React from 'react';
import ReactDom from 'react-dom';


//create a react component

const App = ()=> {

const buttonText='click me!'
    return (
    <div>
        <label className='label' htmlFor='name'>Enter name:- </label>
        <input id='name' type="text" />
    <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
    </div>
    );
}


ReactDom.render(
    <App />,
    document.querySelector('#root')

);
