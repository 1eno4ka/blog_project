import React from 'react';
import Storage from './Storage'

class NewPost extends React.Component{

addposttoblog (){
  let allposts = Storage.get ("blog");
  let post = {
    id: this.id.value,
    title: this.title.value,
    text: this.text.value,
    date: this.date.value
  }
  allposts.push(post);
  Storage.set ("blog", allposts);
  console.dir (allposts );
}

  render(){
    return(
      <div>
        <input ref={el =>this.id=el}/>
        <input ref={el =>this.title=el}/>
        <input ref={el =>this.text=el}/>
        <input ref={el =>this.date=el}/>
        <button onClick = {this.addposttoblog.bind(this)}> Save this post </button>
      </div>
    )
  }
}

export default NewPost
