import React from 'react';
import Storage from './Storage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Blog extends React.Component {
  render() {
    // console.dir("ININININI");
    let postId = this.props.match.params.id; //достает id из адреса
    console.dir (postId);
    let posts = Storage.get ("blog"); // достали весь массив
    let theverypost = posts.find (post => post.id == postId) //ищет в ассиве все посты с айдишником
    console.dir (theverypost);
    return (
      <div>
          <h1> {theverypost.title} </h1>
          <div> {theverypost.text} </div>
          <div> {theverypost.date} </div>
          <Link to = {"/edit-post/" + postId}>
            <button> Изменить </button>
          </Link>
      </div>
    )
  }
}
export default Blog
