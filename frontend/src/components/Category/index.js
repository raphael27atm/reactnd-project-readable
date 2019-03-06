import React, { Component } from 'react';
import Post from '../Post';
import AddPost from '../AddPost';
import { connect } from 'react-redux';

// Material ui
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

// Styles
import { styles } from './styles'
class Category extends Component {
  state = {
    sort:'timestamp',
    open: false
  }
  
  handleSort(type){
    this.setState({sort:type});
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    
  render() {
    const { category } = this.props.match.params;
    const { classes } = this.props;
    let posts = this.props.posts.filter( p => p.category === category);
    posts.sort((a,b) => (b[this.state.sort] - a[this.state.sort]));
    
    return (
      <React.Fragment>
        <Typography variant="h5" component="h3">
          {category} category
        </Typography>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        > 
          <div className={classes.paper}>
            <AddPost 
            category={category} 
            />
          </div>
        </Modal>
        <div className={classes.marginBottom}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={this.handleOpen}
          >
            New post
          </Button>
          <Select
            onChange={event => this.handleSort(event.target.value)}
            className={classes.pullRight}
            value={this.state.sort}
            mb={10}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="timestamp">Sort by: Date</MenuItem>
            <MenuItem value="voteScore">Sort by: Vote Score</MenuItem>
          </Select>
        </div>  
        {posts.map(post=>(
          <Post key={post.id} 
              post = {post}
          />
        ))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({posts,categories}) =>({
  posts,
    categories,
})

export default connect(mapStateToProps)(styles(Category))
