import { useState } from 'react'
import { DatePicker } from 'ui-kit'

export default {
  title: 'DatePicker',
}

export const Default = () => {
  const [value, setValue] = useState()

  return <DatePicker value={value} onChange={(event) => setValue(event.value)} />
}
