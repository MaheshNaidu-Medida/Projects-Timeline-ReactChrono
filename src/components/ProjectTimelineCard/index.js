import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCard,
  ProjectImage,
  Header,
  ProjectTitle,
  DurationContainer,
  Duration,
  Description,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <ProjectCard>
      <ProjectImage url={imageUrl} alt="project" />
      <Header>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </Header>
      <Description>{description}</Description>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCard>
  )
}
export default ProjectTimelineCard
