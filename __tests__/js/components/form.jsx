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

    let form = TestUtils.renderIntoDocument(<Form method="POST" action="http://email.hirekris.com/email" onSubmit="hey"></Form>)

    it('Form should render type prop', () => {
        expect(form.props.method).toBe('POST')
        expect(form.props.action).toBe('http://email.hirekris.com/email')
        expect(form.props.onSubmit).toBe('hey')

    })

})
