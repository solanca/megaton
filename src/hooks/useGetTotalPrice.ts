import { useEffect, useState } from 'react';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { Address, OpenedContract } from '@ton/core';
import Lottery from '../smart-contract/lottery';

export function useGetTotalPrice(address:string) {
  const client = useTonClient();
  const [val, setVal] = useState<null | number>();
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
      setVal(null);
      const val = await lotteryContract.getTotalBalance();
      setVal(Number(val));
      setLoading(false)
    }
    getValue();
  }, [lotteryContract]);

  return {
    loading,
    value: val,
  };
}
