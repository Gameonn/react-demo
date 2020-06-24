import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    persons: [
      {id: 'io8', name: "Max", age: 28},
      {id: '3o8', name: "Manu", age: 31},
      {id: 'i58', name: "Adam", age: 22}
    ],
    username: 'SuperUser',
    showPersons: false,
    userInput: ''
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Manu", age: 31},
        {name: "Adam", age: 32}
      ]
    })
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
      this.setState({ showPersons: !doesShow });
  }

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }


  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '10px auto',
      display: 'block',
      borderRadius: '5px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              deleteAction={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={ (event) => this.nameChangedHandler(event,person.id) } />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobby is playing cricket </Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!!')}> My hobbies is racing </Person>
          <Person name={this.state.persons[2].name} changed={this.nameChangedHandler} age={this.state.persons[2].age}/> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); //classes=['red']
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');//classes=['red','bold']
    }


    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} deleteAction={() => this.deleteCharHandler(index)} />
    });

    return (
      <StyleRoot>
        <div className="App">
        <p className={classes.join(' ')}> This is working fine!! </p>
        <UserInput changed={this.usernameChangedHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
        <p>{this.state.userInput} </p>
        <Validation inputTextLength={this.state.userInput.length} />
        {charList}

          <button style={style} onClick={() => this.switchNameHandler('Maximilian!!!')}> Switch Name </button>
          <button onClick={() => this.togglePersonHandler()}> Toggle </button>
          {/*  this.state.showPersons ? `<div></div>` : null */}
              {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
