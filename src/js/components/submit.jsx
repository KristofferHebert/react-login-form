import React from 'react';

let Submit = React.createClass({
    render(){
        return (
            <button
                type='submit'
                className={this.props.className}>
                {this.props.child}
            </button>
        )
    }
})

export default Submit
