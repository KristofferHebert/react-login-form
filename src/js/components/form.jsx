// https://facebook.github.io/jest/docs/tutorial-react.html
//http://jaketrent.com/post/send-props-to-children-react/

import React from 'react'

const Form = React.createClass({
    getDefaultProps() {
        return {
          method: 'POST',
          action: '#'
        }
    },
    handleChange(event){
        let newState = this.state
        newState.user[event.target.name] = event.target.value
        this.setState(newState)
    },
    getInitialState(){
        return this.state = {
            user: {}
        }
    },
    render(){
        return (
            <form method={this.props.method} action={this.props.action} onSubmit={this.props.handleSubmit} className={this.props.className}>
                {this.props.children}
            </form>
        )
    }
})

export default Form
