import {loginUser} from "../lib/auth";
import Router from 'next/router';

class LoginForm extends React.Component {
    state = {
        email: "Rey.Padberg@karina.biz",
        password: "ambrose.net",
        error: '',
        isLoading: false
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        const {email, password} = this.state;
        event.preventDefault();
        this.setState({error: '', isLoading: true});
        console.log(this.state);

        loginUser(email, password).then(() => {
            Router.push("/");
        })
            .catch(this.showError);
    }

    showError = err => {
        console.error(err);
        //if error.response is available else err.message
        const error = err.response && err.response.data || err.message;
        this.setState({error, isLoading: false});
    }

    render() {
        const {email, password, error, isLoading} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="email"
                           name="email"
                           placeholder="email"
                           value={email}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password"
                           name="password"
                           placeholder="password"
                           value={password}
                           onChange={this.handleChange}/>
                </div>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending" : "Submit"}

                </button>


                {error && <div>{error}</div>}
            </form>
        )
    }
}

//conditional if error is available        {error && <div>error</div>}

export default LoginForm;