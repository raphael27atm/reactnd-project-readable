import React, { Component } from 'react';
import { addComment, editPostCommentsCount } from '../../redux/actions';
import { connect } from 'react-redux';
import * as API from '../../utils/api';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Styles
import { styles } from './styles'
class AddComment extends Component {
  state = {
    author:'',
    comment:'',
  }

  handleChange(value, type){
    this.setState({[type]:value})
  }
  
  handleAddComment(event){
    event.preventDefault();
    let comment = {
      id: Math.random().toString(13).replace('0.', ''),
      timestamp: new Date().getTime(),
      body: this.state.comment,
      author: this.state.author,
      parentId: this.props.postId,
    }
    API.addComment(comment).then(results =>{
      console.log(results);
      this.props.dispatch(addComment(results));
      this.props.dispatch(editPostCommentsCount(results.parentId, 1));
      this.setState({author:'',comment:''})
    })
  }   
  
  render() {
    const {
      classes
    } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
            label="Comment"
            value={this.state.comment} 
            onChange={(event) => this.handleChange(event.target.value,'comment')}
            className={classes.textField}
            margin="normal"
            required
          />
          <TextField
            label="Your Name"
            value={this.state.author} 
            onChange={(event) => this.handleChange(event.target.value,'author')}
            className={classes.textField}
            margin="normal"
            required
          />
        </FormControl>
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={event => this.handleAddComment(event)}
        >
          Submit
        </Button>
      </form>
    )
  }
}
export default connect()(styles(AddComment))
