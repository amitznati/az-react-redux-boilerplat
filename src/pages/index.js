import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';

export const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/posts" element={ <Posts /> } />
      </Routes>
    </Router>
  );
};

export default Index;
