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

    let login = TestUtils.renderIntoDocument(<Login method="GET" action="#" className="form-login" />)

    it('Login should render props correctly', () => {
        expect(login.props.method).toBe('GET')
        expect(login.props.action).toBe('#')
        expect(login.props.className).toBe('form-login')
    })

})
