import { useState } from 'react'
import { RangeCalendar, SingleCalendar, MultipleCalendar } from 'ui-kit'

export default {
  title: 'Calendar',
}

export const Single = (props) => {
  const [value, setValue] = useState()

  return <SingleCalendar {...props} value={value} onChange={(event) => setValue(event.value)} />
}

export const Range = (props) => {
  const [value, setValue] = useState([])

  return <RangeCalendar {...props} value={value} onChange={(event) => setValue(event.value)} />
}

Range.argTypes = {
  viewsCount: {
    control: {
      type: 'number',
      min: 1,
      max: 3,
    },
  },
}

Range.args = {
  viewsCount: 2,
}

export const Multi = (props) => {
  const [value, setValue] = useState([])

  return <MultipleCalendar {...props} value={value} onChange={(event) => setValue(event.value)} />
}
