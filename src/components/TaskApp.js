import React, { Component } from 'react';
import TaskReceive from './TaskReceive.js'
import TaskList from './TaskList.js' 
import TaskSelector from './TaskSelector.js'

import todostyle from '../style/todo.css'



class TaskApp extends Component {

    constructor(props){

      super(props);

      this.state={todoList:[{status:0,buttonColor:"beforeclick",itemDisplayName:"Learn React",visibility:true},{status:0,buttonColor:"beforeclick",itemDisplayName:"Learn Redux",visibility:true},{status:0,buttonColor:"beforeclick",itemDisplayName:"Learn Node",visibility:true}]}
                 
       
    }

  checkItems=(index) => {

    this.state.todoList[index].status=1;
    this.state.todoList[index].buttonColor="afterclick";
    let count = this.state.completedItemCount-1;
    this.state.completedItemCount=count;
    this.setState({todoList : this.state.todoList});
    this.setState({completedItemCount: this.state.completedItemCount});
 
  }

  getcompletedItemCount=()=>{

    let count =0;
    for(let i=0;i<this.state.todoList.length;i++){
      if(this.state.todoList[i].status==0){
       count= count+1;
      }
    }
    return count;
  }

  selectItems=(itemStatus)=>{

       for(let i=0;i<this.state.todoList.length;i++){
         
            if(itemStatus === "All"){

                this.state.todoList[i].visibility=true;

            }else if(itemStatus === "Active"){

                if(this.state.todoList[i].status===0){
                  this.state.todoList[i].visibility=true;
                }else{
                  this.state.todoList[i].visibility=false;
                }

            }else if(itemStatus === "Completed"){

                if(this.state.todoList[i].status===1){
                  this.state.todoList[i].visibility=true;
                }else{
                  this.state.todoList[i].visibility=false;
                }
            }
        }
        this.setState({todoList:this.state.todoList});

  }

  render() {
    return (
        <div className="outerdiv">
            <TaskReceive todoList={this.state.todoList}/>
            <TaskList todoList={this.state.todoList} checkItems={this.checkItems} />
            <TaskSelector todoList={this.state.todoList} selectItems={this.selectItems} completedItemCount={this.getcompletedItemCount()} />
        </div>
    );
  }
}

export default TaskApp;
