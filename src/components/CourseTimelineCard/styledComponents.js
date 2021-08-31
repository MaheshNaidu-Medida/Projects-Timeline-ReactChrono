import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const CardHeading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  margin-left: 6px;
`
export const CardDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
`
export const CardLinksContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CardLink = styled.p`
  margin-bottom: 8px;
  margin-right: 8px;
  background-color: silver;
  border-radius: 8px;
  padding: 11px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`
