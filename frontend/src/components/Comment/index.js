import React, { Component } from 'react';
import { increaseCommentScore, decreaseCommentScore, removeComment,editComment,editPostCommentsCount} from '../../redux/actions';
import { connect } from 'react-redux';
import * as API from '../../utils/api';
import { dateYYYYMMDDHHMMSS } from '../../utils/utils';

// Material ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

// Styles
import { styles } from './styles'
class Comment extends Component {
  state = {
    editFlag: false,
    commentBody:"",
  }
      
  increaseCommentScore(postId, commentId){
    API.increaseCommentScore(commentId).then(results =>{
      this.props.dispatch(increaseCommentScore(postId, commentId));
    })
  }
  
  decreaseCommentScore(postId, commentId){
    API.decreaseCommentScore(commentId).then(results =>{
      this.props.dispatch(decreaseCommentScore(postId, commentId));
    })
  }
    
  removeComment(postId, commentId){
    API.removeComment(commentId).then(results =>{
      this.props.dispatch(removeComment(postId, commentId));
      this.props.dispatch(editPostCommentsCount(postId, -1));
    })
  }
  
  handleEditComment(status){
    if(!status){
      let comment = {
        id: this.props.comment.id,
        timestamp: new Date().getTime(),
        body: this.state.commentBody,
      }
      API.editComment(comment).then(results =>{
        this.props.dispatch(editComment(results));
      })
    }
    this.setState({editFlag:status})
  }
  
  componentWillMount(){
    this.setState({commentBody : this.props.comment.body});
  }
  
  handleChange(value, type){
    this.setState({[type]:value})
  }
  
  render() {
    const {comment, postId, classes} = this.props;
    
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              {this.state.editFlag ? (
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Comment"
                    value={this.state.commentBody} 
                    onChange={(event) => this.handleChange(event.target.value,'commentBody')}
                    className={classes.textField}
                    margin="normal"
                    required
                  />
                </FormControl>
              ):(
                <Typography component="p">
                  {comment.body}
                </Typography>
              )}
                
                <p className="blog-post-meta"><i>{dateYYYYMMDDHHMMSS(comment.timestamp)}, by {comment.author}</i></p>
                <p >
                    {comment.voteScore >= 0 ? (
                        <i className="far fa-thumbs-up"></i>
                    ):(
                        <i className="far fa-thumbs-down"></i>
                    )} {comment.voteScore}
                </p>
              <Button 
                variant="outlined"
                color="primary" 
                onClick = {event => this.increaseCommentScore(postId, comment.id)}
                className={classes.button}
              >
                Like
              </Button>
              <Button 
                variant="outlined"
                color="secondary" 
                onClick = {event => this.decreaseCommentScore(postId, comment.id)}
                className={classes.button}
              >
                Dislike
              </Button>
              <Button 
                variant="outlined"
                onClick = {event => this.handleEditComment(this.state.editFlag ? false : true)}
                className={classes.button}
              >
                Edit
              </Button>
              <Button 
                variant="outlined" 
                color="secondary" 
                onClick = {event => this.removeComment(postId, comment.id)}
                className={classes.button}
              >
                Delete
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  }
}


export default connect()(styles(Comment))
