// import {
//     Address,
   
//   } from "ton";
//   import { client, contractAddresses } from "../smart-contract/constant";

// export  const getWinners = async () => {
//     try {
//       let response = await client.runMethod(
//         Address.parse(contractAddresses.address1),
//         "getLastwinner"
//       );
//       let value = response.stack;
//       let address = value.skip(2).readAddress().toString();
//         return address;
//     } catch (error) {
//       console.log("err111==", error);
//     }
//   };

//   export const getTotalPrice = async() => {
//     try {
//         let response = await client.runMethod( Address.parse(contractAddresses.address1),"totalBalance");
//         let value = response.stack.readBigNumber();
//       return convertToTon(value);
//     } catch (error) {
//         console.log(error)
//     }
//   }
//   export const getBalance = async() => {
//     try {
//         let response = await client.getBalance(Address.parse("EQB_wJOjF0jz0pS6FpMwzbHs8be7njVbt83aErmavA9xru2v"));
//         // let value = response.stack.readBigNumber();
//         console.log('balance==',response);
//     } catch (error) {
        
//     }
//   }

//   const convertToTon = (value:bigint) =>Number( value.toString())/1000000000