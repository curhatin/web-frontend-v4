import React, { Component } from 'react';
import Navbar from '../MainComponents/Navbar/Navbar';
import UserNavbar from '../MainComponents/UserNavbar/UserNavbar';
import Comment from '../MainComponents/Comment/Comment'

class CommentStory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

            
                <UserNavbar />
                <Comment />
                

            </div>
         );
    }
}
 
export default CommentStory;