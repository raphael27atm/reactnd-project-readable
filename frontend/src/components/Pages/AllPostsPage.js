import React, { Component } from 'react'
import { connect } from 'react-redux'

// API
import * as API from '../../utils/api';

// Actions
import { receivePosts } from '../../redux/actions';

// Components
import AddPost from '../AddPost';
import Post from '../Post';

class AllPostsPage extends Component {
  state = {
    sort: 'date'
  };
  
  handleSort(type){
    this.setState({sort:type});
  };

  componentDidMount(){
    API.posts().then(posts =>{
        this.props.receivePosts(posts.sort((a,b) => (b.timestamp - a.timestamp)));
    })
  }

  render() {
    this.props.posts.sort((a,b) => (b[this.state.sort] - a[this.state.sort]));
    return(
      <div>
        <div className="row">
          <div className="col-sm-9">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addPostModal">New post</button>
            <AddPost />
          </div>
          <div className="col-sm-3 pull-right">
            <div className="form-group">
              <select className="form-control" onChange={event => this.handleSort(event.target.value)}>
                <option value="timestamp">Sort by: Date</option>
                <option value="voteScore">Sort by: Vote Score</option>
              </select>
            </div>
          </div>
        </div>
        {this.props.posts.map(post=>(
          <Post key={post.id} 
            post = {post}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({posts}) =>({
  posts,
})

const mapDispatchToProps = dispatch =>({
  receivePosts: (data) => dispatch(receivePosts(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPostsPage);