import {
  useSingleCalendarState,
  useRangeCalendarState,
  useMultipleCalendarState,
} from 'react-web-platform'

import { CalendarBase } from './CalendarBase'

export const SingleCalendar = (props) => {
  const state = useSingleCalendarState(props)

  return <CalendarBase state={state} />
}

export const RangeCalendar = (props) => {
  const state = useRangeCalendarState(props)

  return <CalendarBase state={state} />
}

export const MultipleCalendar = (props) => {
  const state = useMultipleCalendarState(props)

  return <CalendarBase state={state} />
}
