import { withStyles } from '@material-ui/core/styles'

const option = theme => ({
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
  cardAction: {
    backgroundColor: '#f4f4f4',
  }
});

export const styles = withStyles(option)