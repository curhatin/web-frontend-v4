import React, { Component } from "react";
import Footer from "../MainComponents/Footer/Footer";
import UserNavbar from "../MainComponents/UserNavbar/UserNavbar";
import Navbar from "../MainComponents/Navbar/Navbar";
import Pstories from "../MainComponents/Pstories/Pstories";
import PstoriesSeacrh from "../MainComponents/Pstories/PstoriesSeacrh";
import {connect} from 'react-redux'
import {login} from '../../actions/authActions'
import {fetchDataPost} from '../../actions/postActions'
import {searchDataPost} from '../../actions/postActions'
import { Z_FIXED } from "zlib";

class PeopleStories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRedirect = () => {
    if (this.props.isAuthenticated === false) {
     this.props.history.push("/Login");
    }
  };
  componentDidMount(){
    if(this.props.token){
      this.props.fetchDataPost(localStorage.token);
    }
    
  }
  render() {
    console.log(this.props.search_data)
    this.renderRedirect()   
    return (
      <div>
          <Navbar />
          <UserNavbar />
          { !this.props.search_data && <Pstories/>}
            { this.props.search_data && <PstoriesSeacrh/>}

          
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  post_list : state.post.post_list,
  token: state.auth.token,
  search_data : state.post.search_post_list
})

export default connect(mapStateToProps,{login,fetchDataPost,searchDataPost})(PeopleStories)
