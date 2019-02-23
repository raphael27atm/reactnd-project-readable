import React, { Component } from 'react';
import * as API from '../../utils/api';
import { connect } from 'react-redux';
import { addPost, removePost, increasePostScore, decreasePostScore} from '../../redux/actions';

// Material ui
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// Components
import EditPost from '../EditPost';

// styles 
import { styles } from './styles'
class PostActions extends Component {
  state = {
    open: false,
  };
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
  handleOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  render() {
      const { post, classes } = this.props;
      return (
        <div>
          <Button 
            variant="outlined"
            color="primary" 
            onClick = {event => this.increasePostScore(post.id)} 
            className={classes.button}
          >
            Like
          </Button>
          <Button 
            variant="outlined"
            color="secondary" 
            onClick = {event => this.decreasePostScore(post.id)} 
            className={classes.button}
          >
            Dislike
          </Button>
          <Button 
            variant="outlined"
            onClick={this.handleOpen}
            className={classes.button}
          >
            Edit
          </Button>
          <Button 
            variant="outlined" 
            color="danger" 
            onClick = {event => this.removePost(post.id)}
            className={classes.button}
          >
            Delete
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          > 
            <div className={classes.paper}>
              <EditPost
                post = {post}
                title = 'Edit a post' 
              />  
            </div>
          </Modal>
        </div>
    )
  }
}
const mapStateToProps = ({posts,comments},{postId}) =>{
  return {
      post : posts.filter(p => p.id === postId)[0],
  }
}
const mapDispatchToProps = dispatch =>({
  addPost: (data) => dispatch(addPost(data)),
  removePost: (id) => dispatch(removePost(id)),
  increasePostScore: (id) => dispatch(increasePostScore(id)),
  decreasePostScore: (id) => dispatch(decreasePostScore(id)),
})
export default connect(mapStateToProps,mapDispatchToProps)(styles(PostActions))
