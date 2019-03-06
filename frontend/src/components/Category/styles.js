import { withStyles } from '@material-ui/core/styles'

const option = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.A300,
    boxShadow: 'none',
    minHeight: '100vh',
    paddingBottom: theme.spacing.unit * 3,
    margin: 0
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '30%',
    left: '45%',
    transform: 'translate(-30%, -20%)'
  },
  pullRight: {
    float: 'right'
  },
  marginBottom: {
    marginBottom: '20px',
  }
})

export const styles = withStyles(option)
