import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';


ReactDOM.render(<MainPage/>, document.getElementById('root'));


serviceWorker.unregister();
