export function shortenTONAddress(address: string|undefined,prefixLength:number,suffixLength:number): string {
 if(address) {

     const prefix: string = address.slice(0, prefixLength);
     const suffix: string = address.slice(-suffixLength);
     
     // Construct the shortened address
     const shortenedAddress: string = `${prefix}......${suffix}`;
     
     return shortenedAddress;
 }else{
    return ""
 }
    
    // Extract the prefix and suffix
}