import React from 'react';

class Todo extends React.Component {
    componentDidMount() {
        console.log('Just for test');
    }

    render() {
        const { todo } = this.props;

        return (
            <div className="todo">
                {todo}
            </div>
        );
    }
}

export { Todo };
