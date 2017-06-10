import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }

    increment() {
      this.props.dispatch({type: 'INCREMENT'});
    }

    decrement() {
      this.props.dispatch({type: 'DECREMENT'});
    }

    componentDidMount() {
        console.log('Just for test');
    }

    render() {

        return (
            <div className="todo">
                <input type="button" value="+" onClick={this.increment}/>
                <input type="button" value="-" onClick={this.decrement}/>
                { this.props.state }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state); // state
  console.log(ownProps); // ownProps
  return { state };
}

export default connect(mapStateToProps)(Todo);
