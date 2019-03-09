import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Route, Link } from 'react-router-dom'

// Actions
import { receiveCategories } from '../../redux/actions';

// API
import * as API from '../../utils/api';

// Material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Components
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import AllPostsPage from '../../components/AllPostsPage'
import PostDetails from '../../components/PostDetails'
import Category from '../../components/Category'

// Styles
import { styles } from './styles'

class App extends Component {
  state = {
    sort: 'date'
  };
  
  handleSort(type){
    this.setState({sort:type});
  };

  componentDidMount(){
    API.categories().then(categories =>{
        this.props.receiveCategories(categories);
    });
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <Link to='/' className={classes.logo}>
                Readable
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Header categories={this.props.categories}/>  
                <Route exact path='/' component={ AllPostsPage }/>
                <Route exact path = "/:category" component={ Category } />
                <Route path = "/:category/:postId" component={ PostDetails } />
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({categories}) =>({
  categories,
})

const mapDispatchToProps = dispatch =>({
  receiveCategories: (data) => dispatch(receiveCategories(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(styles(App)));
