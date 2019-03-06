import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import GithubIcon from '../assets/GithubIcon'
import { styles } from './styles.js'

const Footer = (props) => {
  const classes = props.classes
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container spacing={ 0 }>
            <Grid item md={ 3 }/>
            <Grid item md={ 6 } className={ classes.root }>
              <div className={ classes.group }>
                <a target="_blank"
                   rel='noopener noreferrer'
                   href="https://github.com/raphael27atm/reactnd-project-readable"><GithubIcon
                  className="github"/></a>
                <Typography className={ classes.copyright } type="subheading"
                            color="inherit">
                  Code by Marlon Raphael
                </Typography>
              </div>
            </Grid>
            <Grid item md={ 3 }/>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default styles(Footer)