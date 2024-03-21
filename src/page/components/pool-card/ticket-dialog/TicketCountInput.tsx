import { Box, InputBase, styled } from '@mui/material'

type Props = {}

const Root = styled(Box)(({theme}) => ({
    borderRadius:20,
    backgroundColor:theme.palette.mode ==='dark'?theme.palette.grey[700]:"#fff",
    display:'flex',
    padding:"4px 16px",
    marginTop:8
}))

const TicketCountInput = (_props: Props) => {
  return (
    <Root>
        <img src="assets/icon/ton.svg" alt="ton" style={{marginRight:'8px'}}/>
        {/* TODO: increment number */}
        <InputBase type='number' fullWidth/>
        <Box sx={{ml:2}}>
            <img src="assets/icon/up.svg" alt="up" style={{cursor:'pointer'}}/>
            <img src="assets/icon/down.svg" alt="down" style={{cursor:'pointer'}}/>
        </Box>
        
    </Root>
  )
}

export default TicketCountInput