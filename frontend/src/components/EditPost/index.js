import React, { Component } from 'react';
import { editPost} from '../../redux/actions';
import { connect } from 'react-redux';
import * as API from '../../utils/api';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Styles
import { styles } from './styles';
class EditPost extends Component {
  state = {
      title:'',
      content:'',
  }
  
  handleChange(value, type){
    this.setState({[type]:value})
  }
  
  handleEditPost(event){
    event.preventDefault();
    let post = {
      id: this.props.post.id,
      title: this.state.title,
      body: this.state.content,
    }
    API.editPost(post).then(results =>{
      this.props.dispatch(editPost(results));
      document.getElementById("closeEditPostModal").click();
    })
  }

  componentWillMount(){
    this.setState({
      title:this.props.post.title,
      content:this.props.post.body,
    })
  }

  render() {
    const {
      classes
    } = this.props;

    return (
      <React.Fragment>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <TextField
              label="Title"
              value={this.state.title}
              onChange={(event) => this.handleChange(event.target.value,'title')}
              className={classes.textField}
              margin="normal"
              required
            />
            <TextField
              label="Content"
              value={this.state.content} 
              onChange={(event) => this.handleChange(event.target.value,'content')}
              className={classes.textField}
              margin="normal"
              required
            />
          </FormControl>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={event => this.handleEditPost(event)}
          >
            Edit
          </Button>
        </form>
      </React.Fragment>
    )
  }
}
export default connect()(styles(EditPost))
