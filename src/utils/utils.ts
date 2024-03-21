export function shortenTONAddress(address: string,prefixLength:number,suffixLength:number): string {
 
    
    // Extract the prefix and suffix
    const prefix: string = address.slice(0, prefixLength);
    const suffix: string = address.slice(-suffixLength);
    
    // Construct the shortened address
    const shortenedAddress: string = `${prefix}......${suffix}`;
    
    return shortenedAddress;
}