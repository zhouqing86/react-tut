import React from 'react';
import { shallow, mount } from 'enzyme';
import { Todo } from '../../src/lib/Todo';
import { expect } from 'chai';
import sinon from 'sinon';
import 'jsdom-global/register';

describe('Todo', () => {
    it('should render a div with "todo" class', () => {
        const component = shallow(
            <Todo />
        );

        expect(component.find('.todo')).to.have.length(1);
    });

    it('calls componentDidMount', () => {
      sinon.spy(Todo.prototype, 'componentDidMount');
      const wrapper = mount(<Todo />);
      expect(Todo.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});
