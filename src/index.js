import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
//slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DOMAIN } from './util/settings/config';

//import da ngon ngu 
// import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
