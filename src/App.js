import React from 'react';
import Storage from "./Storage";
import AddButton from './AddButton'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component{
    constructor (props){
      super(props) //обращаетсся ккомпоненту, чтобы его достать
      // Storage.init () // выызываем
    }
    render (){
      function showId (id){ //ф-ция вывода id о клику
          console.dir (id)
      }
      let blog = Storage.get ("blog") //достаем из хранилища
      console.dir (blog);
      // ниже обращение в ф-ции
      // <div  onClick={showId.bind(this, post.id)}> {post.title} </div>
    return (
      <div>
        <div>
          {blog && blog.map(post=>(
            <Link key={post.id} to = {"post/" + post.id}>
              <div> {post.title} </div>
            </Link>
            ))}
        </div>
        <AddButton/>
      </div>
    );
  }
}

export default App;
