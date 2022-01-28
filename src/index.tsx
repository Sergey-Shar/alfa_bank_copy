import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Navigation from './Navigation';
import { Provider } from "react-redux"
import { store } from "./store"
import { createTheme, ThemeProvider } from '@mui/material';

interface ITheme {
  palette:{
    primary: {
      main:string
    }
  }
}

const theme: ITheme = createTheme({
  palette: {
    primary: {
      main: "hsla(0,0%,100%,0.8)",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <Navigation/>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


