import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import Todo from '../src/lib/Todo';

describe('Empty test', function() {

    it('empty test should run successfully', function() {
        expect('A').to.equal('A');
    });

    it('should render App', () => {
        const component = shallow(
            <App />
        );

        expect(component.find('.refresh-button')).to.have.length(1);
        expect(component.contains(<Todo />)).to.be.true;
    });
});
