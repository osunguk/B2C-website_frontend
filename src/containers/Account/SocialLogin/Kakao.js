import React, { Component } from 'react'
import './Kakao.css'

class Kakao extends Component {
  componentDidMount(){
    const { jsKey } = this.props;
    ((d, s, id, cb) => {
      if (!d.getElementById(id)) {
        const el = d.getElementsByTagName(s)[0];
        const fjs = el;
        let js = el;

        js = d.createElement(s);
        js.id = id;
        js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      }
    })(document, 'script', 'kakao-sdk', () => {
      window.Kakao.init(jsKey);
    });
  }

  onBtnClick = () => {
    const version = 'v2'
    const getProfile = true
    const { onSuccess, onFailure } = this.props;

    if (Kakao) {
      window.Kakao.Auth.loginForm({
        // throughTalk: false,
        success: (response) => {
          if (getProfile) {
            window.Kakao.API.request({
              url: `/${version}/user/me`,
              success: (profile) => {
                const result = { response, profile };
                onSuccess(result);
              },
              fail: (error) => {
                onFailure(error);
              },
            });
          } else {
            onSuccess({ response });
          }
        },
        fail: onFailure,
      });
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.onBtnClick}>카카오 로그인</button>
      </div>
    )
  }
}

export default Kakao