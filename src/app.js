import React, { Component } from 'react'
import {render} from 'react-dom';
import WebFont from 'webfontloader';
import Header from './components/Header'

import './styles/main.scss';
import AppTheme from 'containers/AppTheme/AppTheme';
import theme from 'config/theme'
import AppRouter from 'routers/AppRouter'

WebFont.load({
    google: {
      families: ['Niramit:300,400,500,600,700', 'sans-serif']
    }
  });

export default class App extends Component {
  render() {
    return (
      <div>
        
<AppTheme theme={theme}>
<AppRouter/>
</AppTheme>
      </div>
    )
  }
}


render(<App />, document.getElementById('app'));