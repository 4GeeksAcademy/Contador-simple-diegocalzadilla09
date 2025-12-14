import React from 'react';
import ReactDom from 'react-dom';

//incluir npm libreias de Bootstrap

import 'bootstrap';

import'../styles/index.scss';

function SimpleCounter(){
    return(<p>Hello World<p>)
    }


ReactDOM.render(
    <Home />,
    document.querySelector('app#')
);