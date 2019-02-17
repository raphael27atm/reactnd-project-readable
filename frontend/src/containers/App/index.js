import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'

// Actions
import { receiveCategories } from '../../redux/actions';

// API
import * as API from '../../utils/api';

// Material ui
import Grid from '@material-ui/core/Grid'

// Components
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import AllPostsPage from '../../components/Pages/AllPostsPage'
import PostDetails from '../../components/PostDetails'
import Category from '../../components/Category'

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
    return (
      <div className="App">
        <Header categories={this.props.categories}/>  
          <div>
            <Grid container spacing={ 0 }>
              <Grid item md={ 3 }/>
              <Grid item md={ 6 } container={ true } direction="column">
                <Switch>
                  <Route exact path='/' component={ AllPostsPage }/>
                  <Route exact path = "/:category" component={ Category } />
                  <Route exact path = "/:category/:postId" component={ PostDetails } />
                </Switch>
              </Grid>
              <Grid item md={ 3 }>
              </Grid>
            </Grid>
          </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({categories}) =>({
  categories,
})

const mapDispatchToProps = dispatch =>({
  receiveCategories: (data) => dispatch(receiveCategories(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
