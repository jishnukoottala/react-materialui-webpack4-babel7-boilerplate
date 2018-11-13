import { MuiThemeProvider, withTheme } from '@material-ui/core/es/styles'
import React, { Component } from 'react'

export default class AppTheme extends Component {

constructor(props){
    super(props);

}

  render() {

    const { theme,children } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    )
  }
}

