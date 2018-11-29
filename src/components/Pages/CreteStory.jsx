import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import Create from '../MainComponents/Create/Create';


class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <UserNavbar />
                <Create />
            </div>
         );
    }
}
 
export default CreateStory;