import React from "react";
import axiosWithAuth from "../../utils/AxisoWithAuth/axisoWithAuth";

class FriendForm extends React.Component {
    state = {
        id: "",
        name: "",
        age: "",
        email: ""
    };
    errorMessage = this.props.error;

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const newFriend = {
            id: Date.now(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        
        
        
        
    }

    render(){
        return(
            <div>
                <h2>Add New Friend</h2>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label><br/>
                            <input onChange={this.handleChanges} value={this.state.name} name="name" id="name" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label><br/>
                            <input onChange={this.handleChanges} value={this.state.age} name="age" id="age" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label><br/>
                            <input onChange={this.handleChanges} value={this.state.email} name="email" id="email" type="email" />
                        </div>
                        {
                            this.errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {this.errorMessage}</div>
                        }
                    <button>Add Friend</button>
                </form>
            </div>
        );
    };
};

export default FriendForm;