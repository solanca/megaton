import { Box, Grid, Skeleton, Typography, styled } from "@mui/material";
import { shortenTONAddress } from "../../../../../utils/utils";

type Props = {
  loading:boolean,
  address:string
};

const WinnerItemBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor:  theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  padding: "4px 12px",
  marginTop: 2,
}));

const WinnerItem = ({loading,address}: Props) => {
  return (
    <WinnerItemBox>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>

        <Grid  container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="caption">{
              loading ? <Skeleton width={200}/> :shortenTONAddress(address,6,8)
            } </Typography>
          </Grid>
          <Grid item>
            {
              loading ? <Skeleton variant="circular" width={20} height={20}/> :
              <img
              onClick={() => window.open(`https://testnet.tonscan.org/address/${address}`)}
                src="assets/icon/external-link.svg"
                alt="link"
                style={{ verticalAlign: "middle",cursor:'pointer' }}
              />
            }
          </Grid>
        </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2">{loading ? <Skeleton width={100}/> : "518TON"} </Typography>
        </Grid>
      </Grid>
    </WinnerItemBox>
  );
};

export default WinnerItem;
