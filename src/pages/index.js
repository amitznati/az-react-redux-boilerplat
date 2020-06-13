import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './Posts';

const Home = () => {
  return (
    <div>
      Home
      <a href="/posts">posts</a>
    </div>
  );
};

export const Index = () => {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route exact path="/posts" component={ Posts } />
    </Router>
  );
};

export default Index;
