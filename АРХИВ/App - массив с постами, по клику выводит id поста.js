import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    render (){
      let blog = [
        { title: "Note 1",
          id: "1",
          text: "This is the first note",
          date: "15.09.19"
        },
        { title: "Note 2",
          id: "2",
          text: "Second note I've wrote",
          date: "15.09.19"
        },
        { title: "Last note",
          id: "3",
          text: "The very last note in this list",
          date: "15.09.19"
        }
      ]
      // console.dir (blog)
      function showId (id){ //ф-ция вывода id о клику
          console.dir (id)
      }
      // ниже отбащение в ф-ции
    return (
      <div>
        {blog.map(post=>(
          <div  onClick={showId.bind(this, post.id)}> {post.title} </div>
          ))}
      </div>
    );
  }
}

export default App;
