import styled from 'styled-components'

export const TimelineContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 20px;
  margin-bottom: 10px;
`
export const TimelineHeading = styled.h1`
  color: #2b237c;
  font-family: 'Roboto';
  font-size: ${props => (props.big ? '18px' : '14px')};
  font-weight: ${props => (props.weight ? 'bold' : 500)};
  line-height: ${props => (props.lineHeight ? 2.5 : 1)};
  text-align: center;
`
