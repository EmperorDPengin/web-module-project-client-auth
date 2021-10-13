import React from "react";
import axiosWithAuth from "../../utils/AxisoWithAuth/axisoWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {

        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then( resp => {
                this.setState({
                    friendsList: resp.data
                })
            })
            .catch( err => {
                console.log(err)
            })
    }

    render() {
        return(
            <div>
                {this.state.friendsList && 
                    <div>
                        {this.state.friendsList.map( friend => (
                            <div key={friend.id}>
                                <h1>{friend.name}</h1>
                                <p>{friend.age} Years of age</p>
                                <p>{friend.email}</p>
                            </div>
                        ))}
                    </div>}
            </div>
        )
    }
}

export default FriendsList;