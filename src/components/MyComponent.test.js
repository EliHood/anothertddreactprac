import React from 'react';
import { shallow } from 'enzyme';

import MyComponent from './MyComponent';

describe("My Component", ()=> {
    it("Should render the MyComponent component", ()=>{
        const wrapper = shallow(<MyComponent />)
    })


    it("Should render the initial layout", ()=>{
        const component = shallow(<MyComponent />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    })

    it("should create an entry in component state", ()=>{
        const component = shallow(<MyComponent/>);
        // find class name 
        const form = component.find('input');

        form.props().onChange({target:{
            name: 'myName',
            value:'myValue'
        }});

        // simulate on change

        expect (component.state('input')).toEqual('myValue');
    })
})