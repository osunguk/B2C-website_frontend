import React, { Component } from 'react';
import Axios from 'axios';
import URL from '../../URL/URL'
import { StoreList } from '../../components';


class TagContainer extends Component {
  state = {
    tag : [],
    length: null,
    tag_name: '',
  }

  componentDidMount(){
    Axios.get(`${URL.tagging}${this.props.t_id}`, { //해당 태그가 걸려있는 store list get
      headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.setState({
        tag : res.data,
        length : res.data.length
      })
    })
    .catch(e => console.log(e))

    Axios.get(`${URL.tag}${this.props.t_id}`, { //태그 data get
      headers: {
        Authorization: `jwt ${localStorage.getItem('token')}`
      }
    }).then(res => {
        this.setState({
        tag_name : res.data.tag_title
      })
    })
    .catch(e => console.log(e))
  }


  render() {
    return(
      <div style={{padding: '50px'}}>
        <h1>"{this.state.tag_name}" 태그가 붙은 가게 목록</h1>
        <h3>태그 id : {this.props.t_id}</h3>
        <h3>해당 태그 게시물 갯수 : {this.state.length}</h3>
        <StoreList data={this.state.tag} display_form={this.props.display_form}/>
      </div>
    )
  }
}

export default TagContainer