import React from 'react';
import axios from 'axios';


export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get('/student');
      let students = response.data;
      this.setState({
        students
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.students.map(student => {
            return <li key={student.id}>{student.fullName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

