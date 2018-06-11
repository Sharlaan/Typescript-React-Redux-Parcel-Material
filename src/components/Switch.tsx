import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import * as React from 'react'
import { InjectedProps, toggle } from '../containers/toggle'

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },
    tooMuch: { flex: 1 },
  })

interface CounterProps extends WithStyles<typeof styles> {}

const SFCCounter: React.FunctionComponent<InjectedProps & CounterProps> = ({
  classes,
  count,
  onToggle,
  onReset,
}) => (
  <Paper className={classes.paper}>
    <Switch onChange={onToggle} disabled={count > 4} />
    {count <= 4 ? (
      <span>Click count: {count}</span>
    ) : (
      <>
        <div className={classes.tooMuch}>You've clicked too much !</div>
        <Button variant="outlined" onClick={onReset}>
          Reset
        </Button>
      </>
    )}
  </Paper>
)

export default withStyles(styles)(toggle(SFCCounter))
