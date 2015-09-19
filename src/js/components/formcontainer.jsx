let FormContainer = React.createClass({
    createUser(){

    },
    loginUser(){

    },
    handleChange(event){

    },
    getInitialState(){
        return this.state = {
            user: ""
        }
    },
    render(){
        return (
            <form action={this.props.action} method={this.props.method} ></form>

        )
    }
})

export default FormContainer
