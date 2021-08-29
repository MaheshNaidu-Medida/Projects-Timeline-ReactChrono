import {AiFillClockCircle} from 'react-icons/ai'

import {
  Card,
  CardHeader,
  CardHeading,
  DurationContainer,
  Duration,
  CardDescription,
  CardLinksContainer,
  CardLink,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <Card>
      <CardHeader>
        <CardHeading>{courseTitle}</CardHeading>
        <DurationContainer>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
      <CardLinksContainer>
        {tagsList.forEach(each => (
          <CardLink key={each.id}>{each}</CardLink>
        ))}
      </CardLinksContainer>
    </Card>
  )
}
export default CourseTimelineCard
