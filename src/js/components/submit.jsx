import React from 'react';

let Submit = React.createClass({
    render(){
        return (
            <input
                type='submit'
                className={this.props.className}
                value={this.props.child}
            />
        )
    }
})

export default Submit
