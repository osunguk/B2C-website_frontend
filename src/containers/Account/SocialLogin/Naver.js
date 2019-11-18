import React, { Component } from 'react'

class Naver extends Component {
  componentDidMount(){
    // const script = document.createElement("script");

    // script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
    // script.async = true;

    // document.body.appendChild(script)

    // var naverLogin = new window.naver.LoginWithNaverId(
    //   {
    //     clientId: 'zd77osJ0K94OH8504tNu',
    //     callbackUrl: 'https://enigmatic-island-94143.herokuapp.com/auth',
    //     isPopup: false,
    //     loginButton: {color: "green", type: 3, height: 60}
    //   }
    // );

    // window.naverLogin.init();
    
  }
  onBtnClick = () => {
    console.log('tes')
  }

  render(){
    return(
      <div>
        <button onClick={this.onBtnClick}>네이버 로그인</button>
      </div>
    )
  }
}

export default Naver