import React, { Component } from 'react'

class Naver extends Component {
  componentDidMount() {
    const { clientId, callbackUrl } = this.props
    const naver_id_login = new window.naver_id_login(clientId, callbackUrl)
    const state = naver_id_login.getUniqState();

    naver_id_login.setButton('green', 1, 40);
    naver_id_login.setDomain('https://enigmatic-island-94143.herokuapp.com/auth');
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
  }

  render() {
    return (
      <div id="naver_id_login" />
    );
  }
}

export default Naver