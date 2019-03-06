import React, { Component } from 'react';
import { addPost } from '../../redux/actions';
import { connect } from 'react-redux';
import * as API from '../../utils/api';

// Material UI
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Styles
import { styles } from './styles';

class AddPost extends Component {
  state = {
    title:'',
    category:'',
    content:'',
    author:'',
  }

  handleChange(value, type){
      this.setState({[type]:value})
  }
  
  handleAddPost(event){
    console.log('oi')
    event.preventDefault();
    let post = {
      id: Math.random().toString(13).replace('0.', ''),
      timestamp: new Date().getTime(),
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
      category: this.state.category,
    }
    API.addPost(post).then(results =>{
      this.props.dispatch(addPost(results));
      document.getElementById("closeAddPostModal").click();
    })
  }
  
  render() {
    const {
      classes
    } = this.props;
    
    return (
      <React.Fragment>
        <Typography variant="h5" component="h3">
          Simple Form Example
        </Typography>
        <Typography component="p">
          The delay between when you click (Submit) and when the alert dialog pops up is intentional, to simulate server latency.
        </Typography>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select
              value={this.state.category}
              onChange={(event) => this.handleChange(event.target.value,'category')}
              inputProps={{
                name: 'age',
                id: 'category',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='react'>React</MenuItem>
              <MenuItem value='redux'>Redux</MenuItem>
              <MenuItem value='udacity'>Udacity</MenuItem>
          </Select>
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
          <TextField
            label="Author"
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
          onClick={event => this.handleAddPost(event)}
        >
          Submit
        </Button>
      </form>      
      </React.Fragment>
    )
  }
}
export default connect()(styles(AddPost))
