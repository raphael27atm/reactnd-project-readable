import React, { Component } from 'react';
import * as API from '../../utils/api';
import { connect } from 'react-redux';
import Comment from '../Comment';
import { addPost, receiveComments, removePost, increasePostScore, decreasePostScore, receivePosts} from '../../redux/actions';
import AddComment from '../AddComment';
import NotFound from '../NotFound';
import Post from '../Post';

// Material ui
import Typography from '@material-ui/core/Typography';

class PostDetails extends Component {
  state = {
    sort: 'timestamp',
  }
    
  handleSort(type){
    this.setState({sort:type});
  }
  
  componentDidMount(){
    const { postId } = this.props.match.params;

    API.posts().then(posts =>{
      this.props.receivePosts(posts.sort((a,b) => (b.timestamp - a.timestamp)));
    })
    
    API.comments(postId).then(comments =>{  
      this.props.receiveComments(comments, postId)
    })
  }
  
  handleDelete(type, id){
    if(type === 'post'){
      this.props.removePost(id);
    }
  }
  
  increasePostScore(id){
    API.increasePostScore(id).then(results =>{
      this.props.increasePostScore(id)
    })
  }
  
  decreasePostScore(id){
    API.decreasePostScore(id).then(results =>{
      this.props.decreasePostScore(id)
    })
  }

  removePost(id){
    API.removePost(id).then(results =>{
      this.props.removePost(id)
    })
  }

  render() {
    const { category, postId } = this.props.match.params;
    let post = this.props.posts.filter(p => p.id === postId);
    this.props.comments[postId] && this.props.comments[postId].sort((a,b) => (b[this.state.sort] - a[this.state.sort]));

    return (
      <div>
        { post.length === 0 ? (
          <NotFound />
        ) : (
            <div>
              <Typography gutterBottom variant="h5" component="h3">
                {category} category
              </Typography>
              { post.map( p => (
                <div>
                  <Post key={p.id} 
                    post = {p}
                  />
                  <Typography gutterBottom variant="h5" component="h5">
                    Comments
                  </Typography>
                  <div className="row">
                    
                    <div className="col-sm-3 pull-right">
                      <div className="form-group">
                        <select className="form-control" onChange={event => this.handleSort(event.target.value)}>
                          <option value="timestamp">Sort by: Date</option>
                          <option value="voteScore">Sort by: Vote Score</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  { this.props.comments[postId] && this.props.comments[postId].map(c => (
                    <Comment
                      key={c.id}
                      comment = {c}
                      postId = {postId}
                    />
                  ))}
                  { post.map( p => (
                    <AddComment
                        key={p.id}
                        postId = {p.id}
                    />
                  ))}                                
                </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({posts,comments}) =>{
  return {
    posts,
    comments
  }
}

const mapDispatchToProps = dispatch =>({
  receivePosts: (data) => dispatch(receivePosts(data)),
  addPost: (data) => dispatch(addPost(data)),
  receiveComments: (postId,comments) => dispatch(receiveComments(postId,comments)),
  removePost: (id) => dispatch(removePost(id)),
  increasePostScore: (id) => dispatch(increasePostScore(id)),
  decreasePostScore: (id) => dispatch(decreasePostScore(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(PostDetails)
