import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducer';

import HTableContainer from '../components/HTableContainer'

function HTable() {
   
    return (
        <HTableContainer/>
    );
}

export default HTableContainer;