import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Blog from './Blog';
import NewPost from './NewPost'
import EditPost from './EditPost'
import { Route, BrowserRouter as Router } from 'react-router-dom'



ReactDOM.render(
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/post-newpost" component={NewPost} />
      <Route exact path="/edit-post/:id" component={EditPost} />
      <Route exact path="/post/:id" component={Blog} />
    </Router>,
document.getElementById('root'));
