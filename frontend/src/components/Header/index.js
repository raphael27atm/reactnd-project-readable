import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Material UI
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// Styles
import { styles } from './styles'

class Header extends Component {
  render() {
    const { categories } = this.props
    const { classes } = this.props
    return (
      <React.Fragment>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Users will be able to post content to predefined categories, 
          comment on their posts and other users' posts, and vote on posts and comments. 
          Users will also be able to edit and delete posts and comments.
        </Typography>
        <div className={classes.cardGrid}>
          <Grid container spacing={40}>
            {categories.map(category=>(
              <Grid item key={category.name} sm={6} md={4} lg={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {category.name}
                    </Typography>
                    <Typography>
                      {category.description}
                    </Typography>  
                  </CardContent>
                  <CardActions>
                    <Link to={`/${category.path}`}>
                      <Button size="small" color="primary">
                        View details
                      </Button>
                    </Link>
                  </CardActions>  
                </Card>
                </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default styles(Header)
