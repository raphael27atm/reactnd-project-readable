import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { dateYYYYMMDDHHMMSS } from '../../utils/utils';
import PostActions from '../PostActions';

// Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Styles
import { styles } from './styles'

class Post extends Component {

  render() {
    const {post, classes} = this.props;
    
    return (
      <React.Fragment>
        <Card className={classes.card} key={post.id}>
          <CardHeader
            title={post.title}
            subheader={`${dateYYYYMMDDHHMMSS(post.timestamp)}, by ${post.author}`}
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.category}  
              </Typography>
              <Typography component="p">
                {post.body.substring(0,150)} ...
              </Typography>
              <Typography component="p">
              {post.voteScore >= 0 ? (
                <i className="far fa-thumbs-up"></i>
                ):(
                    <i className="far fa-thumbs-down"></i>
                )} {post.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-comments"></i> {post.commentCount} {post.commentCount > 1 ? 'comments': 'comment'}
              </Typography>
              <PostActions
                postId = {post.id}
              />
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardAction}>
            <Button color="primary">
              <Link to = {`/${post.category}/${post.id}`}>
                View details
              </Link>
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}
export default styles(Post)
