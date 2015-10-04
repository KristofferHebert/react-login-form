//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js

jest.dontMock('../../../src/js/components/submit')
import Submit from '../../../src/js/components/submit'
import React from 'react/addons';

const TestUtils = React.addons.TestUtils
let shallowRenderer = TestUtils.createRenderer()
describe('Submit', () => {

    it('Submit component should be defined', () => {
        expect(Submit).toBeDefined()
    })

    let submit = TestUtils.renderIntoDocument(<Submit className="input" value="Submit"/>)

    it('Input should render props correctly', () => {
        expect(submit.props.value).toBe('Username')
        expect(submit.props.className).toBe('input')
    })

})
