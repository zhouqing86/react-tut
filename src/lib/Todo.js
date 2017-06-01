import React from 'react';

class Todo extends React.Component {
    constructor() {
      super();
      this.state = {
          countValue: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }

    increment() {
      this.setState({ countValue: this.state.countValue + 1});
    }

    decrement() {
      this.setState({ countValue: this.state.countValue - 1});
    }

    componentDidMount() {
        console.log('Just for test');
    }

    render() {
        const { todo } = this.props;

        return (
            <div className="todo">
                <input type="button" value="+" onClick={this.increment}/>
                <input type="button" value="-" onClick={this.decrement}/>
                { this.state.countValue }
            </div>
        );
    }
}

export default Todo;
