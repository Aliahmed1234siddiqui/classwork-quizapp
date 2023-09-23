import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { useLocation } from 'react-router-dom';
import { Route } from '@mui/icons-material';
import Router    from './config/Router';

function App() {
  return (
    <>
    <Router/>
    </>
  );
}

export default App;
