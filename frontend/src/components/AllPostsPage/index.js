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

  rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  render() {
    const { classes } = this.props
    this.props.posts.sort((a,b) => (b[this.state.sort] - a[this.state.sort]));
    
    return(
      <React.Fragment>
        <div className="row">
          <div className="col-sm-9">
            <Button onClick={this.handleOpen}>New post</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            > 
              <div className={[classes.paper, classes.modal]}>
                <AddPost />
              </div>
            </Modal>
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