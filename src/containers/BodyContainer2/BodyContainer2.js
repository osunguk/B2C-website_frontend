import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import { Redirect } from 'react-router-dom'
import DetailStore from "../DetailStore/DetailStore";
import TagContainer from "../TagContainer/TagContainer";
// import Axios from "axios";

class BodyContainer2 extends Component {


  render() {
    if (this.props.displayed_form === 'home') {
      return (
        <div >
          <div className='nav'>
            가게 list <br />
            즐겨찾기 list <br />
            별점 5점 가게 list <br />
          </div>
          <div className='content'>
            <Body type={this.props.type} display_form={this.props.display_form} />
          </div>
        </div>
      )
    }
    else if (this.props.displayed_form === 'profile') {
      return (
        <ProfileContainer display_form={this.props.display_form} />
      )
    }
    else if (this.props.displayed_form === 'logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');
      
      // console.log(localStorage.getItem('kakao_token'))
      // console.log(this.props.username.split('@')[1])
      // Axios.post(`https://kapi.kakao.com/v1/user/logout`,{
      //   Authorization : `Bearer ${localStorage.getItem('kakao_token')}`,
      // }).then(res => {
      //   console.log(res)
      // })
      // .catch(e => {
      //   console.log(e)
      // })
      // localStorage.removeItem('kakao_token');
      return (
        <div>
          <Redirect to='/auth' />
        </div>
      )
    }
    else if (this.props.displayed_form === 'store') {
      return (
        <DetailStore 
          type={this.props.type} 
          store_id={this.props.store_id} 
          handle_review={this.handle_review} 
          check={this.check} 
          display_form={this.props.display_form}
          trans_tag_id={this.props.trans_tag_id}
        />
      )
    }

    else if(this.props.displayed_form === 'tag') {
      return(
        <TagContainer t_id={this.props.t_id} display_form={this.props.display_form}/>
      )
    }
    else {
      return (
        <h1>요청하신 페이지가 없습니다</h1>
      )
    }
  }
};

export default BodyContainer2;