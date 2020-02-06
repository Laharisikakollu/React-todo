import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state={
    task:'',
    taskList:[],
  };


  inputChangeHandler = (input)=>{
      this.setState({
        task: input
      });
  }



  btnAddHandler = (inputTask)=>{
    let item = {
      value: inputTask,
      done: false,
      edit: false
    }
    let newList = [
      ...this.state.taskList,
      item
    ]
    this.setState({
      taskList:newList,
      task: ''
    })
  }



  btnDeleteHandler = (itemIndex) =>{
    this.state.taskList.splice(itemIndex, 1);
    this.setState({taskList: this.state.taskList});
  }



  btnDoneHandler = (itemIndex) =>{
    let newList = this.state.taskList.map((todo, index) => {
      if(index === itemIndex) {
        return {
          ...todo,
          done: true
        }
      } else {
        return todo
      }
    })
    this.setState({
        taskList : newList,
    })
  }


  editHandler = (itemIndex, boolean) => {
     let newList = this.state.taskList.map((todo, index) => {
       if(index === itemIndex) {
         return {
           ...todo,
           edit: true
         }
       } else {
         return todo
       }
     })
     this.setState({
         taskList : newList,
     })
   }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
        </header>
          <div className="ContentBody">
            <input
                type="text"
                className="inputTask"
                placeholder="Add your task"
                onChange={(event) => this.inputChangeHandler(event.target.value)}
                value ={this.state.task}
                />
            <button
                type="submit"
                className="Add"
                onClick={()=> this.btnAddHandler(this.state.task)} >Add
            </button>


            <ul className="ulTag">
              {this.state.taskList.map((todo,index) =>
                <li className="List"
                style={{textDecoration: this.state.taskList[index].done ? 'line-through' : 'none', }}>
               
               <div contentEditable= {this.state.taskList[index].edit ? "true" : "false"}
                    style={{width:'300px'}}> {todo.value} </div>

                    
                <button
                      className="outputBtns"
                      onClick={() => this.btnDoneHandler(index)} > Done</button>
                 <button
                      className="outputBtns"
                      onClick={(event) => this.editHandler(index, true)}> Edit</button>
                <button
                      className="outputBtns"
                      onClick={(event) => this.btnDeleteHandler(index)} >Delete</button>
              </li>)}
            </ul>
          </div>
      </div>
    );
  }
}
export default App
