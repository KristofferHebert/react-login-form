//https://github.com/facebook/jest/blob/master/examples/react-es6/__tests__/CheckboxWithLabel-test.js

jest.dontMock('../../../src/js/components/form')
import Form from '../../../src/js/components/form'
import React from 'react/addons';

const TestUtils = React.addons.TestUtils
let shallowRenderer = TestUtils.createRenderer()

describe('FormContainer', () => {

    it('Form component should be defined', () => {
        expect(Form).toBeDefined()
    })

    it('Form should render defaults prop', () => {
        let form = TestUtils.renderIntoDocument(<Form></Form>)

        expect(form.props.method).toBe('POST')
        expect(form.props.action).toBe('#')

    })

    it('Form should render props', () => {
        let form = TestUtils.renderIntoDocument(<Form method="GET" action="http://google.com" onSubmit="hey" className="form"></Form>)

        expect(form.props.method).toBe('GET')
        expect(form.props.action).toBe('http://google.com')
        expect(form.props.onSubmit).toBe('hey')
        expect(form.props.className).toBe('form')

    })

})
