import { Box, Divider, Grid, Typography } from "@mui/material";
import WinnerItem from "./winner-list";

type Props = {
  loading:boolean,
  address:string,
  
};

const WinnerHistory = ({loading,address}: Props) => {
  return (
    <Box p={3}>
      <Grid container alignItems="center">
        <Typography>Previous winners</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
      </Grid>
      <Box
        height="200px"
        padding={2}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "2px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "2px",
            "&:hover": {
              backgroundColor: "#555",
            },
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_item, index) => (
          <WinnerItem key={index} loading={loading} address={address}/>
        ))}
      </Box>
    </Box>
  );
};

export default WinnerHistory;
