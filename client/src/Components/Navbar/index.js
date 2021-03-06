import React from "react";

import "./style.css"
import {Link} from "react-router-dom"



class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link class="navbar-brand" id="brand " to="/">
                    {/* <img src="" width="30" height="30" class="d-inline-block align-top" href="/landing" loading="lazy" /> */}
                FriendZone

              </Link>
                {/* <button type="button" class="btn btn-primary btn-lg" id="loginBtn">Log in</button> */}

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="#">Home <span class="sr-only">(current)</span></Link>

                        {/* <Link class="nav-link" to="/addFriends">Add a Friend</Link> */}
                        <Link class="nav-link" to="/Aboutus">About us</Link>

                        <Link class="nav-link" to="/friends">Friendzone</Link>

                        <Link class="nav-link" to="/Addfriends">Add Friends</Link>
                        <Link class="nav-link" to="/Chat">Chat</Link>

                        <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true"></Link>
                    </div>
                </div>
            </nav>
        )
    };
}
export default Nav;