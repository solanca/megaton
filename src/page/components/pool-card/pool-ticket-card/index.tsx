import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Skeleton,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { useState } from "react";
import TicketDialog from "../ticket-dialog";
import { IType } from "..";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import lottery_abi from " ../"
type Props = {
  type: IType;
  loading?:boolean;
  totalPrice?:number;
  handleExpand?:() => void;
  expand?:boolean
  isPhone?:boolean
};

type ProgressLabelProps = {
  color: string;
  // Add other props you want to pass here
};

const PoolTicketPaper = styled(Paper)(() => ({
  borderRadius: 20,
  padding: "20px 20px",
  backgroundImage: "url(assets/image/toncoin.png)",
  backgroundRepeat: "no-repeat",
  height: "310px",
  boxShadow: "none",
  position:'relative'
}));

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "type",
})<Props>(({ theme, type }) => ({
  height: 36,
  borderRadius: 18,
  marginTop: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 18,
    background:
      type === "time"
        ? "linear-gradient(45deg, #FFE3C5 30%, #FFAF59 100%)"
        : "linear-gradient(45deg, #BBBBED 30%, #6D6FF6 100%)",
  },
}));

const TicketPriceBox = styled(Box)(({ theme }) => ({
  height: 36,
  borderRadius: 18,
  marginTop: 6,
  paddingRight: "12px",
  paddingLeft: "12px",
  backgroundColor:
    theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ProgressLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "color",
})<ProgressLabelProps>(({ theme, color }) => ({
  position: "absolute",
  right: "-24px",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
  color: theme.palette.mode === "light" ? color : "white",
}));
// setWasmOptions({
//   binaryPath: require.resolve('@tonclient/lib-web/tonclient.wasm'),
// });

const PoolTicketCard = ({ type,totalPrice,loading,handleExpand,expand,isPhone }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  

  return (
    <>
      <PoolTicketPaper>
        <Grid container alignItems="center">
          <Typography>Time limit pool</Typography>
          <Grid item flex={1}>
            <Divider orientation="horizontal" variant="middle" flexItem />
          </Grid>
          <Chip label="T64" />
        </Grid>
        <Box position="relative">
          {type === "time" ? (
            <>
              <BorderLinearProgress
                variant="determinate"
                type={type}
                value={60}
              />
              <ProgressLabel color="#FFAF59" variant="body1">
                134h 12m
              </ProgressLabel>
            </>
          ) : (
            <>
              <BorderLinearProgress
                variant="determinate"
                type={type}
                value={80}
              />
              <ProgressLabel color="#6D6FF6" variant="body1">
                70/100
              </ProgressLabel>
            </>
          )}
        </Box>
        <TicketPriceBox>
          <Typography color={"text.disabled"}>Ticket price:</Typography>
          <Typography color={"text.disabled"}>0.5</Typography>
        </TicketPriceBox>
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <Typography variant="subtitle1" color={"text.disabled"}>
            Total price:
          </Typography>

          <Typography
            variant="h1"
            sx={{ color: type === "time" ? "#FFAF59" : "#5754E1" }}
            mx={3}
          >
            {loading ? <Skeleton  width={100}/> : totalPrice}
          </Typography>

          <Typography variant="h6" color={"text.disabled"}>
            TON
          </Typography>
        </Box>
        <Grid container justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
          >
            Get tickets
          </Button>
        </Grid>
        {
         isPhone && handleExpand &&
          <IconButton sx={{position:'absolute',right:4,bottom:4}} onClick={handleExpand}>{expand ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</IconButton>
        }
      </PoolTicketPaper>
      <TicketDialog
        open={open}
        handleClose={() => setOpen(false)}
      ></TicketDialog>
    </>
  );
};

export default PoolTicketCard;
