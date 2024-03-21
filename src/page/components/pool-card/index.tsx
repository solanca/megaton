import { Paper, styled, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'
import PoolTicketCard from './pool-ticket-card'
import WinnerHistory from './winner-history'
// import { getTotalPrice, getWinners } from '../../../utils/contract-function';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetTotalPrice } from '../../../hooks/useGetTotalPrice';
import { contractAddresses } from '../../../smart-contract/constant';
import { useGetWinners } from '../../../hooks/useGetWinner';
export type IType ="time"|"prize";
type Props = {
  type:IType
}

const PoolPaper = styled(Paper)(({theme}) => ({
    borderRadius:20,
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    boxShadow:'none',
    // padding:8
}))

const PoolCard = ({type}: Props) => {
  const [expand, setExpand] = useState<boolean>();

  const {loading:loading1,value:totalPrice} = useGetTotalPrice(contractAddresses[type]);
  const {loading:loading2,address} = useGetWinners(contractAddresses[type]);

  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));



  const handleExpand = () => {
    setExpand(e => !e)
  }
  return (
    <PoolPaper>
        <PoolTicketCard isPhone = {isPhone} type={type} totalPrice={totalPrice as number} loading={loading1} expand={expand}  handleExpand={handleExpand}/>
        <AnimatePresence>
        {isPhone ? expand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WinnerHistory loading={loading2} address={address as string} />
          </motion.div>
        ) :  <WinnerHistory loading={loading2} address={address as string} />}
      </AnimatePresence> 
    </PoolPaper>
  )
}

export default PoolCard