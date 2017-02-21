import React from 'react';

const Todo = React.createClass({
    componentDidMount: function() {
        console.log('hhahhahha');
    },

    render: function() {
        const { todo } = this.props;

        return (
            <div className="todo">
                {todo}
            </div>
        );
    }
});

export { Todo };
