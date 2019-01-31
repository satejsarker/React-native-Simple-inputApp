import React from 'react';

import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import App from './App';
import ConfigureStore from './src/store/ConfigureStore';
const store=ConfigureStore();
const  RnRedux=()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent('awsome', () => RnRedux);