//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js

jest.dontMock('../../../src/js/components/login')
import Login from '../../../src/js/components/login'
import React from 'react/addons';

const TestUtils = React.addons.TestUtils
let shallowRenderer = TestUtils.createRenderer()
describe('Login', () => {

    it('Login component should be defined', () => {
        expect(Login).toBeDefined()
    })

    let login = TestUtils.renderIntoDocument(<Input type="text" name="Username" placeholder="Username" className="input" />)

    it('Login should render props correctly', () => {
        expect(login.props.name).toBe('Username')
        expect(login.props.placeholder).toBe('Username')
        expect(login.props.type).toBe('text')
        expect(login.props.className).toBe('input')
    })

})
