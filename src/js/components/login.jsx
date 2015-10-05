import React from 'react';
import Input from './input'
import Form from './form'
import Submit from './submit'

let Login = React.createClass({
    render(){
        return (
            <Form method={this.props.method} action={this.props.action} onSubmit={this.props.onSubmit} className={this.props.className}>
                <Input type="text" name="username" placeholder="Username" className="input" />
                <Input type="password" name="password" placeholder="Password" className="input" />
                <Submit value="Submit" />
            </Form>
        )
    }
})

export default Login
