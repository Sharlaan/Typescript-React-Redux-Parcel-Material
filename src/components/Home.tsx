import AppBar from '@material-ui/core/AppBar'
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import Drawer from './layout/Drawer'
import Switch from './Switch'

const INITIAL_COUNT: number = 2

const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: '100%',
      display: 'grid',
      gridTemplateColumns: `auto 1fr`,
      gridTemplateRows: 'auto 1fr',
      gridTemplateAreas: `'appBar appBar'
                        'drawer content'`,
    },
    appBar: {
      gridArea: 'appBar',
      position: 'static',
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: { gridArea: 'drawer' },
    content: {
      gridArea: 'content',
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
    },
    toolbar: theme.mixins.toolbar,
  })

interface HomeProps extends WithStyles<typeof styles> {}

function Home(props: HomeProps): JSX.Element {
  const { classes } = props

  return (
    <div className={classes.container}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" color="inherit" noWrap={true}>
            Title
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer className={classes.drawer} />

      <section className={classes.content}>
        <Switch initialCount={INITIAL_COUNT} />
      </section>
    </div>
  )
}

export default withStyles(styles)(Home)
