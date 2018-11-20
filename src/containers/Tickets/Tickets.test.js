import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Tickets} from './Tickets';
import Pager from '../../components/Tickets/Pager/Pager';

configure({adapter: new Adapter()})

describe('<Tickets />',() => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Tickets 
                onInitialFetch={() => {}}
                currentPage="2"
                totalPage="4"
                 />)
    })

    it('should render <Pager /> at any time' , () => {
        expect(wrapper.find(Pager)).toHaveLength(1);
    })
})