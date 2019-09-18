import Storage from './Storage.js'

export default class PostService {
    create () {

    }

    static update (postId, newPost) {
      let iNeedPosts = Storage.get ("blog");
      let thepostIneed = iNeedPosts.findIndex (post => post.id == postId)
      iNeedPosts.splice (thepostIneed, 1)
      iNeedPosts.push(newPost);
      Storage.set ("blog", iNeedPosts);
      console.dir(iNeedPosts);
    }

    static delete (postId) {
      let iNeedPosts = Storage.get ("blog");
      let thepostIneed = iNeedPosts.findIndex (post => post.id == postId)
      iNeedPosts.splice (thepostIneed, 1)
      Storage.set ("blog", iNeedPosts);
      console.dir(iNeedPosts)

    }

    get () {

    }
}


// let postId = this.props.match.params.id;
