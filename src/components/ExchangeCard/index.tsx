import styled from 'styled-components'
import { Box } from '@arborswap/uikit'

const ExchangeCard = styled(Box)<{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
  background-color: ${({ theme }) => theme.colors.background};
`
export default ExchangeCard
