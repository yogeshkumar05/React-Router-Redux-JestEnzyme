import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component
{
    render()
    {
        return(
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about"> About</Link></li>
                    {/* <li><Link to={"/user/"+2}>User</Link></li> */}
                    <li><Link to={"/user/"}>User</Link></li>
                </ul>
            </div>
        )
    }
}