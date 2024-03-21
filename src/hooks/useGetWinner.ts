import { useEffect, useState } from 'react';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { Address, OpenedContract } from '@ton/core';
import Lottery from '../smart-contract/lottery';

export function useGetWinners(address:string) {
  const client = useTonClient();
  const [winnerAddress, setWinnerAddress] = useState<null | string>();
  const [ loading,setLoading] = useState<boolean>(true);

  const lotteryContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Lottery(
      Address.parse(address) 
    );
    return client.open(contract) as OpenedContract<Lottery>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!lotteryContract) return;
      setWinnerAddress(null);
      const address = await lotteryContract.getLastWinner();
      setWinnerAddress(address.toString());
      setLoading(false)
    }
    getValue();
  }, [lotteryContract]);

  return {
    loading,
    address: winnerAddress,
  };
}
