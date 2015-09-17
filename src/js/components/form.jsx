// https://facebook.github.io/jest/docs/tutorial-react.html


import React from 'react'

const FormContainer = React.createClass({
    createUser(){

    },
    loginUser(){

    },
    handleChange(event){

    }
    getInitialState(){
        return this.state = {
            user: ""
        }
    },
    render(){
        return ()
    }
})
const UsernameInput = React.createClass({
    render(){
        return (
            <input type="text" name="username" placeholder="Username" onChange="{this.props.handleChange}"/>
        )
    }
})
const PasswordInput = React.createClass({})
const PasswordConfirmInput = React.createClass({})

const Form = React.createClass({
    render(){
        return (
            <FormContainer>

            </FormContainer>
        )
    }
})

export default Form
