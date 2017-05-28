import React from 'react';
import faker from 'faker';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "30"
        },
        {
          "id": 3,
          "name": "Baz",
          "age": "20"
        }
      ]
    };
    this.updateState = this.updateState.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  updateState(e) {
    this.setState({ inputValue: e.target.value });
  }

  generateItem(id) {
    return {
      id: id,
      name: faker.name.findName(),
      age: faker.random.number()
    }
  }

  updateData() {
    const randomData = [1, 2, 3].map(this.generateItem);
    this.setState({ data: randomData });
  }

  closeMyAccount() {
    console.log('closeMyAccount');
  }

  componentDidMount() {
      console.log('App componentDidMount');
  }

  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
          <input type="text" value={this.state.inputValue} onChange={this.updateState}/>
          <p>{this.state.inputValue}</p>
          <input type="button" value="refresh" className='refresh-button' onClick={this.updateData}/>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

// class TableRow extends React.Component {
//    render() {
//       return (
//          <tr>
//             <td>{this.props.data.id}</td>
//             <td>{this.props.data.name}</td>
//             <td>{this.props.data.age}</td>
//          </tr>
//       );
//    }
// }

const TableRow = React.createClass({
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
     );
  }
});

export default App;
