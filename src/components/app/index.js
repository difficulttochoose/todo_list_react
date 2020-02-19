import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: Math.random(), title: 'Task1', done: false },
        { id: Math.random(), title: 'Task2', done: false },
        { id: Math.random(), title: 'Task3', done: false },
        { id: Math.random(), title: 'Task4', done: false },
        { id: Math.random(), title: 'Task5', done: false },
      ]
    };

    this.addNewTaskHandler = e => {
      e.preventDefault();
      this.setState({
        tasks: [
          ...this.state.tasks,
          { id: Math.random(), title: e.target[0].value, done: false }
        ]
      })
      e.target[0].value = '';
    };

    this.addDoneToTaskHandler = (taskId) => this.setState({
      tasks: [
        ...this.state.tasks.map(el => el.id === taskId ? { ...el, done: true } : el)
      ]
    })

    this.removeTaskHandler = (taskId) => this.setState({
      tasks: [
        ...this.state.tasks.filter(el => el.id !== taskId)
      ]
    })

  };

  render() {

    const tasks = this.state.tasks;
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Todo list</h1>
          </Col>
          <Col xs={12}>
            <form onSubmit={this.addNewTaskHandler} className="text-center">
              <input type="text" name="taskName" placeholder="Add new task" />
              <button>Add task</button>
            </form>
          </Col>
          <Col xs={12}>
            <ul className="text-center">
              {
                tasks.map(el => (
                  <li key={el.id} className={el.done ? 'task_done' : ''}>
                    {el.title}
                    {el.done ? <button onClick={() => this.removeTaskHandler(el.id)}><FontAwesomeIcon icon={faTrashAlt}/></button> : <button onClick={() => this.addDoneToTaskHandler(el.id)}><FontAwesomeIcon icon={faCheck}/></button>}
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
};




export default App;
