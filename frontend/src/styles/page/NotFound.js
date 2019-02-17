import { withStyles } from '@material-ui/core/styles'

const option = theme => ({
  root: {
    margin: theme.spacing.unit * 10,
    textAlign: 'center'
  }
})

export const styles = withStyles(option)
