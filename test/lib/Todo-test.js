import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from '../../src/lib/Todo';
import { expect } from 'chai';

describe('Todo', () => {
    it('should render a div with "todo" class', () => {
        const todo = 'Walk dog';
        const component = shallow(
            <Todo />
        );

        expect(component.find('.todo')).to.have.length(1);
    });
});
