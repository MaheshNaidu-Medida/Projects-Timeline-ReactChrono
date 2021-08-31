import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {TimelineContainer, TimelineHeading} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <TimelineContainer>
      <TimelineHeading>
        MY JOURNEY OF <br />
        <TimelineHeading as="span" weight lineHeight big>
          CCBP 4.0
        </TimelineHeading>
      </TimelineHeading>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(each => {
          const {id, categoryId} = each
          if (categoryId === 'COURSE') {
            return <CourseTimelineCard key={id} courseDetails={each} />
          }
          return <ProjectTimelineCard key={id} projectDetails={each} />
        })}
      </Chrono>
    </TimelineContainer>
  )
}
export default TimelineView
