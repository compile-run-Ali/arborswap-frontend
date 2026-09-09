export const formatAddress = (address) => {
  return `${address.substring(0, 2)}...${address.substring(38, 42)}`
}
