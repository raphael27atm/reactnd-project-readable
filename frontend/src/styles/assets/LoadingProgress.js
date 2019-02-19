import { withStyles } from '@material-ui/core/styles'

const option = theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const styles = withStyles(option)
