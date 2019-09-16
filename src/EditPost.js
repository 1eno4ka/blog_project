import React from 'react';
import Storage from './Storage'

class EditPost extends React.Component{

  editThisPost (){
    let iNeedPosts = Storage.get ("blog");
    let postId = this.props.match.params.id;
    let thepostIneed = iNeedPosts.find (post => post.id == postId)
    iNeedPosts.splice (thepostIneed, 1)
    let post = {
      id: this.id.value,
      title: this.title.value,
      text: this.text.value,
      date: this.date.value
    }
    iNeedPosts.push(post);
    Storage.set ("blog", iNeedPosts);
    console.dir(iNeedPosts)

  }

  render(){
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
