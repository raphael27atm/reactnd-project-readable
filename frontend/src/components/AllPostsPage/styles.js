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
  },
  modal: {
    top: '30%',
    left: '50%',
    transform: 'translate(-30%, -20%)'
  }
})

export const styles = withStyles(option)
