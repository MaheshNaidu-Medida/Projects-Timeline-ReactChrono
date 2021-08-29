import styled from 'styled-components'

export const ProjectCard = styled.div`
  width: 37%;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ProjectImage = styled.img`
  width: 90%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const ProjectTitle = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`
export const Description = styled.p`
  color: #171f46;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
`
export const VisitLink = styled.a`
  text-decoration: normal;
  color: #0967d2;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`
