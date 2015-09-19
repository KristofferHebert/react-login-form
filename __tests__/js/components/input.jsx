//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js

jest.dontMock('../../../src/js/components/input')
import Input from '../../../src/js/components/input'
import React from 'react/addons';

const TestUtils = React.addons.TestUtils
let shallowRenderer = TestUtils.createRenderer();
describe('Input', () => {

    it('Input component should be defined', () => {
        expect(Input).toBeDefined()
    })

    let input = TestUtils.renderIntoDocument(<Input type="text" name="Username" placeholder="Username" />)

    it('Input should render type prop', () => {
        console.log(input)
        expect(input.props.name).toBe('Username')
        expect(input.props.placeholder).toBe('Username')
        expect(input.props.type).toBe('text')

    })

})
