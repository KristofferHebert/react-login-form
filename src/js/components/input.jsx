import React from 'react';

let Input = React.createClass({
    render(){
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                className={this.props.className}
                onChange={this.props.handleChange}
            />
        )
    }
})

export default Input
