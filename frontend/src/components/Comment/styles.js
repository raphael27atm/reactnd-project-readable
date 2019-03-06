import { withStyles } from '@material-ui/core/styles'

const options = theme => ({ 
  card: {
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '100%',
  },
  buttonInit: {
    margin: theme.spacing.unit * 4,
    textAlign: 'center'
  },
})

export const styles = withStyles(options)

