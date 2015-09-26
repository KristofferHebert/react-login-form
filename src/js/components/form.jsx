// https://facebook.github.io/jest/docs/tutorial-react.html

import React from 'react'

const Form = React.createClass({
    getDefaultProps() {
        return {
          method: 'get',
          action: '#'
        }
    },
    render(){
        return (
            <form method={this.props.method} action={this.props.action} onSubmit={this.props.handleSubmit}>
                {this.props.children}
            </form>
        )
    }
})

export default Form
