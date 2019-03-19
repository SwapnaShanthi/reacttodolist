import React, { Component } from 'react';
import todostyle from '../style/todo.css'

class TaskReceive extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
     <div className="taskreceivediv"><input className="inputstyle" defaultValue="What needs to be done ?"></input></div>
    );
  }
}

export default TaskReceive;