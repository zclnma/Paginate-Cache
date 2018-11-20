import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TemporaryDrawer} from './Drawer';

configure({adapter: new Adapter()})

describe('<Drawer />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TemporaryDrawer />)
    })

    it('should open drawer when Learn More is clicked' , () => {
        
    })
})