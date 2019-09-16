import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class AddButton extends React.Component{
  render(){
    return(
      <Link to = "/post-newpost">
        <button> Новый пост </button>
      </Link>
    )
  }
}

export default AddButton
