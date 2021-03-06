import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


const App = () => {
  return(
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  )
};

ReactDOM.render(<App></App>, document.getElementById('root'));