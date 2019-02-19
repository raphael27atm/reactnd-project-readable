import React, { Component } from 'react'
import { connect } from 'react-redux'

// API
import * as API from '../../utils/api';

// Actions
import { receivePosts } from '../../redux/actions';

// Material ui
import Grid from '@material-ui/core/Grid'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

// Components
import AddPost from '../AddPost';
import Post from '../Post';

// Styles
import { styles } from './styles'

class DefaultPage extends Component {
  state = {
    open: false,
    sort: 'date'
  };
  
  handleSort(type){
    this.setState({sort:type});
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount(){
    API.posts().then(posts =>{
        this.props.receivePosts(posts.sort((a,b) => (b.timestamp - a.timestamp)));
    })
  }

  render() {
    const { classes } = this.props
    this.props.posts.sort((a,b) => (b[this.state.sort] - a[this.state.sort]));
    
    return(
      <React.Fragment>
        <Button onClick={this.handleOpen}>New post</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        > 
          <div className={classes.paper}>
            <AddPost />
          </div>
        </Modal>
        <Grid>
          <select className="form-control" onChange={event => this.handleSort(event.target.value)}>
            <option value="timestamp">Sort by: Date</option>
            <option value="voteScore">Sort by: Vote Score</option>
          </select>
        </Grid>
        <Grid>
        {this.props.posts.map(post=>(
          <Post key={post.id} 
            post = {post}
          />
        ))}
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({posts}) =>({
  posts,
})

const mapDispatchToProps = dispatch =>({
  receivePosts: (data) => dispatch(receivePosts(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(styles(DefaultPage));