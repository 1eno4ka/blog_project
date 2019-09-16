// import React from 'react';
// import ReactDOM from 'react-dom';

export default class Storage {

  static init (){
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
    Storage.set ("blog", blog) // записать перемнную в храниище
    // Storage.set ("blog1", blog) // записать перемнную в храниище
    // Storage.set ("blog2", blog) // записать перемнную в храниище
  }

  static get (parameter_name){
      return JSON.parse(localStorage.getItem(parameter_name))

  }

  static set (parameter_name, parameter_value){
      localStorage.setItem (parameter_name, JSON.stringify(parameter_value));
  }
}
