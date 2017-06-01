import React from 'react';

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          countValue: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);

      props.store.subscribe(() => {
        this.forceUpdate();
      });
    }

    increment() {
      this.props.store.dispatch({type: 'INCREMENT'});
    }

    decrement() {
      this.props.store.dispatch({type: 'DECREMENT'});
    }

    componentDidMount() {
        console.log('Just for test');
    }

    render() {

        return (
            <div className="todo">
                <input type="button" value="+" onClick={this.increment}/>
                <input type="button" value="-" onClick={this.decrement}/>
                { this.props.store.getState() }
            </div>
        );
    }
}

export default Todo;
