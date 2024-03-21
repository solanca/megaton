import { Divider, Grid, Typography } from "@mui/material";

type Props = {};

const PoolSelectItem = (_props: Props) => {
  return (
    <>
    <Grid container justifyContent="space-between" alignItems="center" sx={{px:2,py:1,cursor:'pointer'}}>
      <Grid item>
        <Grid container columnGap={1}>
          <img src="assets/icon/point.svg" alt="point" />
          <Typography>Time limit</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>#314</Typography>
      </Grid>

    </Grid>
      <Divider orientation="horizontal" sx={{mx:2}}/>
    </>
  );
};

export default PoolSelectItem;
