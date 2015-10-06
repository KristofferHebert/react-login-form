//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js

jest.dontMock('../../../src/js/components/signup')
import Signup from '../../../src/js/components/signup'
import React from 'react/addons';

const TestUtils = React.addons.TestUtils
let shallowRenderer = TestUtils.createRenderer()
describe('Signup', () => {

    it('Signup component should be defined', () => {
        expect(Signup).toBeDefined()
    })

    let signup = TestUtils.renderIntoDocument(<Signup method="POST" action="#" className="form-signup" />)

    it('Signup should render props correctly', () => {
        expect(signup.props.method).toBe('POST')
        expect(signup.props.action).toBe('#')
        expect(signup.props.className).toBe('form-signup')
    })

})
