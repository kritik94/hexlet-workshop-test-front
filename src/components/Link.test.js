import React from 'react';
import Link from './Link';
import {shallow} from 'enzyme';

test('Link changes the class when hovered', () => {
    const link = shallow(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );

    expect(link.text()).toEqual('Facebook');

    link.simulate('mouseEnter');
    expect(link.state('class')).toEqual('hovered');

    link.simulate('mouseLeave');
    expect(link.state('class')).toEqual('normal');
});
