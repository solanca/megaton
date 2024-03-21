import {
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import TicketCountInput from "./TicketCountInput";
import { useTonConnectUI } from "@tonconnect/ui-react";
import {  contractAddresses } from "../../../../smart-contract/constant";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const TicketDialog = ({ open, handleClose }: Props) => {
  const theme = useTheme();
  // const client = useTonClient();

  const [tonConnectUI] = useTonConnectUI();


  

  const getTicket = async() => {
try {
  // window.open(`https://app.tonkeeper.com/transfer/${contractAddresses.time}`)
const response = await  tonConnectUI.sendTransaction({validUntil: Math.floor(Date.now() / 1000) + 60,messages:[{
  address:contractAddresses["time"],amount:"1000000000"
 }]})

 console.log('response====',response)
} catch (error) {
  console.log("errr=",error);
}
    // lotteryContract.purchaseTicket(_,address)
  }
  // TODO: background of dialog
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          padding: 6,
          borderRadius: 8,
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[50]
              : theme.palette.grey[800],
        },
      }}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
    >
      <IconButton sx={{ position: "absolute", top: "20px", right: "30px" }} onClick={handleClose}>
      <img
        src="assets/icon/close 1.svg"
        alt="close"
        />
   
      </IconButton>
      <TicketCountInput />
      <Grid container alignItems="center" mt={2}>
        <Typography color={"text.disabled"}>Ticket price</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
        <Typography>0.5 TON</Typography>
      </Grid>
      <Grid container alignItems="center" mt={2}>
        <Typography color={"text.disabled"}>Total price</Typography>
        <Grid item flex={1}>
          <Divider orientation="horizontal" variant="middle" flexItem />
        </Grid>
        <Typography>9 TON</Typography>
      </Grid>
      <Grid container justifyContent="center" mt={4}>
        <Button onClick={getTicket} variant="contained" color="secondary">
          Get ticket
        </Button>
      </Grid>
    </Dialog>
  );
};

export default TicketDialog;
