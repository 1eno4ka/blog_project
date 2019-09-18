import React from 'react';
import Storage from './Storage'
import PostService from './PostService'
import {Redirect} from "react-router-dom"

class EditPost extends React.Component{

  editThisPost (){
    let postId = this.props.match.params.id;
    let newPost = {
      id: this.id.value,
      title: this.title.value,
      text: this.text.value,
      date: this.date.value
    }
    PostService.update (postId, newPost);
    this.setState({redirect: true})
  }

  render(){
    if (this.state && this.state.redirect) {
      return (<Redirect to="/" />);
    }

    let iNeedPosts = Storage.get ("blog"); // достали массив под названим Блог
    let postId = this.props.match.params.id; // КАК-ТО ДОСТАЕМ ID - УТОЧНИТЬ!!!!!!
    let thepostIneed = iNeedPosts.find (post => post.id == postId) //находим нужный пост

// внизу в инпуте кладем значение из сушествующего поста и сохраняем
    return(
      <div>
        <input defaultValue= {thepostIneed.id} ref={el =>this.id=el}/>
        <input defaultValue = {thepostIneed.title} ref={el =>this.title=el}/>
        <input defaultValue = {thepostIneed.text} ref={el =>this.text=el}/>
        <input defaultValue = {thepostIneed.date} ref={el =>this.date=el}/>
        <button onClick = {this.editThisPost.bind(this)}> Save this post </button>
      </div>
    )
  }
}

export default EditPost
