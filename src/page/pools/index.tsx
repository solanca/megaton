import { Grid } from '@mui/material'
import PoolCard from '../components/pool-card'

type Props = {}

const PoolsPage = (_props: Props) => {
  return (
    <Grid container spacing={6}>
    <Grid item md={6} sm={12} xs={12} >
      <PoolCard type='time'/>
    </Grid>
    <Grid item md={6} sm={12} xs={12}>
      <PoolCard type='prize'/>
    </Grid>
  </Grid>
  )
}

export default PoolsPage