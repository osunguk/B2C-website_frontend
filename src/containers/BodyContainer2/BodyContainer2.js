import React, { Component } from "react";
import Body from '../Body/Body'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import { Redirect } from 'react-router-dom'
import DetailStore from "../DetailStore/DetailStore";
import TagContainer from "../TagContainer/TagContainer";
import Axios from "axios";
import URL from '../../URL/URL'

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
      Axios.get(URL.currentuser, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }).then(res => {
        if (res.data[0].user_type === 2) {
          window.Kakao.Auth.logout()
        }
        else if (res.data[0].user_type === 3) {
          window.FB.logout(function () {
            window.gapi.auth2.signOut()
          });
        }
        else if (res.data[0].user_type === 4) {
          console.log('네이버 로그아웃 실행')
        }
        else if (res.data[0].user_type === 5) {
          const google_auth = window.gapi.auth2.getAuthInstance()
          google_auth.signOut()
          google_auth.disconnect()
        }
      }).catch(e => console.log(e))
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');


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

    else if (this.props.displayed_form === 'tag') {
      return (
        <TagContainer t_id={this.props.t_id} display_form={this.props.display_form} />
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