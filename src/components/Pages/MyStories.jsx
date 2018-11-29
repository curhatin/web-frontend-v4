import React, { Component } from "react";
import Navbar from "../MainComponents/Navbar/Navbar";
import UserNavbar from "../MainComponents/UserNavbar/UserNavbar"
import Mstory from "../MainComponents/Mstory/Mstory";
import {connect} from 'react-redux'
import {login} from '../../actions/authActions'
import {fetchDataPostById} from '../../actions/postActions'
import {searchDataPost} from '../../actions/postActions'
import MstorySearch from '../MainComponents/Mstory/MstorySearch'



class Mystories extends Component {
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
      this.props.fetchDataPostById(localStorage.token);
    }
    
  }
  render() {
    
    this.renderRedirect()   
    return (
      <div>
        <Navbar/>
        <UserNavbar />
        { !this.props.search_data && <Mstory/>}
            { this.props.search_data && <MstorySearch/>}

        
       
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  post_list_by_id : state.post.post_list_by_id,
  token: state.auth.token,
  search_data : state.post.search_post_list
})

export default connect(mapStateToProps,{login,fetchDataPostById,searchDataPost})(Mystories)
