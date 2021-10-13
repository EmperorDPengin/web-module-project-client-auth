import React from "react";
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

class LogInPage extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange= e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/api/login',  this.state.credentials)
            .then(resp => {
                localStorage.setItem("token", resp.data.payload);
                this.props.history.push('/friendslist');
            })
            .catch(err => {
                console.log(err);
                this.setState.isLoading = false;
            })
    };

    render(){
        return (
            <div className="loginpage-main">
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LogInPage;