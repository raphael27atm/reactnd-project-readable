import { withStyles } from '@material-ui/core/styles'

const options = theme => ({ 
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
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

