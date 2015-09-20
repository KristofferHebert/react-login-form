let FormContainer = React.createClass({
    handleSubmit(){

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
            <form action={this.props.action} method={this.props.method} onSubmit={this.handleSubmit}>
              <Input type="text" name="username" placeholder="Username" handleChange={this.handleChange}/>
              <Input type="password" name="password" placeholder="Password" handleChange={this.handleChange}/>
              <Input type="repeatpassword" name="repeatpassword" placeholder="Repeat Password" handleChange={this.handleChange}/>
              <button type="submit">Create Account</button>
            </form>
        )
    }
})

export default FormContainer
